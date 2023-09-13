import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

import { FileVideo, Upload, Wand2 } from "lucide-react";
import { Separator } from "./ui/separator";

export function FormsAside() {
    return (
        <aside className="w-80 space-y-6">
            <form className="space-y-6">
                <label
                    htmlFor="video"
                    className="w-full flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground rounded-md border border-dashed aspect-video cursor-pointer hover:bg-primary-foreground transition-colors"
                >
                    <FileVideo />
                    Selecione um vídeo
                </label>

                <input
                    type="file"
                    id="video"
                    accept="video/mp4"
                    className="sr-only"
                />

                <Separator />

                <div className="space-y-2">
                    <Label htmlFor="transcription_prompt">
                        Prompt de transcrição
                    </Label>
                    <Textarea
                        id="transcription_prompt"
                        placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
                        className="h-20 max-h-32 leading-relaxed"
                    />
                </div>

                <Button type="submit" className="w-full text-secondary bg-secondary-foreground hover:bg-secondary-foreground/90">
                    Carregar vídeo

                    <Upload className="w-4 h-4 ml-2" />
                </Button>
            </form>

            <Separator />

            <form className="space-y-6">
                <div className="space-y-2">
                    <Label>
                        Modelo
                    </Label>

                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um prompt..." />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="title">Título do Youtube</SelectItem>
                            <SelectItem value="description">Descrição do Youtube</SelectItem>
                        </SelectContent>
                    </Select>
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
                    />

                    <span className="block text-xs text-muted-foreground italic leading-relaxed">
                        Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                    </span>
                </div>

                <Separator />

                <Button type="submit" className="w-full text-white">
                    Executar

                    <Wand2 className="w-4 h-4 ml-2" />
                </Button>
            </form>
        </aside>
    )
}