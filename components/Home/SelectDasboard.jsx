import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import Link from "next/link";
  
  const SelectDashboard = () => {
    return (
      <div>
        <Select>
          <SelectTrigger className="w-[50px] h-[50px] rounded-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* Logout Option */}
              <SelectItem value="Logout">
                <Link href="/logout">
                  Logout
                </Link>
              </SelectItem>
  
              {/* Dashboard Option */}
              <SelectItem value="Dashboard">
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  };
  
  export default SelectDashboard;
  