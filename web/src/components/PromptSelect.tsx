import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

interface PromptSelectProps {
    onPromptSelected: (template: string) => void
}

interface PromptProps {
    id: string
    title: string
    template: string
}

export function PromptSelect(props: PromptSelectProps) {
    const [prompts, setPrompts] = useState<PromptProps[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then(response => {
            setPrompts(response.data)
        })
    }, [])

    function handlePromptSelected(promptId: string) {
        const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)

        if (!selectedPrompt) {
            return
        }

        props.onPromptSelected(selectedPrompt.template)
    }

    return (
        <Select onValueChange={handlePromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..." />
            </SelectTrigger>

            <SelectContent>
                {prompts?.map((prompt) => (
                    <SelectItem key={prompt.id} value={prompt.id}>{prompt.title}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}