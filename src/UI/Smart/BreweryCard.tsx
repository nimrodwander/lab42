import { useSelectorApp } from "../../state/hooks";
import { AppCard } from "../Dumb/Card"


interface Props{
    id: string;
}

export const BreweryCard: React.FC<Props> = ({id}) => {
    const selector = useSelectorApp((state) => {
        
    });

    return <></>
}