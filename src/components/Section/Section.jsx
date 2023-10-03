import {SectionContainer, SectionTitle} from "./Section.styled"


export const Section = ({title}) => {
    return <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        
    </SectionContainer>
}