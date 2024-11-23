
import { Calendar } from "@/components/ui/calendar"
const calendar = () => {
    const [date, setDate] = React.useState < Date | undefined > (new Date())
    return (
        <div className="py-[150px]">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-[1px]"
            />
        </div>
    );
};

export default calendar;