import { MultiSelect } from "@mantine/core"

interface Props {value: string[], onChange: (value: string[]) => void}
export const TagsSelect = ({value, onChange}: Props) => {
    return <MultiSelect label='Теги' data={['Backend', 'Frontend', 'Mobile', 'Hr']} withAsterisk value={value} onChange={onChange}/>
}