import { useState } from "react";
import { useCompletion } from "ai/react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import { Wand2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { VideoInputForm } from "./VideoInputForm";
import { PromptSelect } from "./PromptSelect";
import { Textarea } from "@/components/ui/textarea";

export function Content() {
    const [temperature, setTemperature] = useState(0.5)
    const [videoId, setVideoId] = useState<string | null>(null)

    const {
        input,
        setInput,
        handleInputChange,
        handleSubmit,
        completion,
        isLoading
    } = useCompletion({
        api: 'http://localhost:3333/ai/complete',
        body: {
            videoId,
            temperature
        },
        headers: {
            'Content-type': 'application/json',
        }
    })

    return (
        <main className="flex flex-1 py-6 gap-6">
            <div className="flex flex-col flex-1 gap-4">
                <div className="grid grid-rows-2 gap-4 flex-1">
                    <Textarea
                        placeholder="Inclua o prompt para a IA..."
                        className="resize-none p-4 leading-relaxed"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Textarea
                        placeholder="Resultado gerado pela IA..."
                        className="resize-none p-4 leading-relaxed"
                        readOnly
                        value={completion}
                    />
                </div>

                <p className="text-sm text-muted-foreground">
                    Lembre-se: você pode utilizar a variável <code className="text-primary">{'{ transcription }'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado
                </p>
            </div>

            <aside className="w-80 space-y-6">
                <VideoInputForm onVideoUploaded={setVideoId} />

                <Separator />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label>
                            Modelo
                        </Label>

                        <PromptSelect onPromptSelected={setInput} />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Modelo
                        </Label>

                        <Select disabled defaultValue="gpt3.5">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                            </SelectContent>
                        </Select>

                        <span className="block text-xs text-muted-foreground italic">Você poderá customizar essa opção em breve</span>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <Label>
                            Temperatura
                        </Label>

                        <Slider
                            min={0}
                            max={1}
                            step={0.1}
                            value={[temperature]}
                            onValueChange={value => setTemperature(value[0])}
                        />

                        <span className="block text-xs text-muted-foreground italic leading-relaxed">
                            Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                        </span>
                    </div>

                    <Separator />

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-white"
                    >
                        Executar

                        <Wand2 className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            </aside>
        </main>
    )
}