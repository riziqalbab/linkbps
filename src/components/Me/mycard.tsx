import { Link } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function MyCard() {
    return (
        <Alert className="max-w-96">
            <Link className="h-4 w-4" />
            <AlertTitle className="font-bold">JUDUL LINK</AlertTitle>
            <AlertDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea hic atque neque nisi aut. Deserunt quibusdam laboriosam odit ducimus tenetur!
            </AlertDescription>
        </Alert>
    )
}
