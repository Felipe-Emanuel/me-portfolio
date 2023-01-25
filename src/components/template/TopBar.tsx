import { useAppData } from "@/data/hook/useAppData";
import { AvatarUser } from "./AvatarUser";
import { ButtonTheme } from "./ButtonTheme";
import { Title } from "./Title";

interface TopBarProps {
  title: string;
  subtitle: string;
}

export function TopBar({ title, subtitle }: TopBarProps) {
  const {theme, changeTheme} = useAppData()


  return (
    <div className="flex items-center">
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonTheme theme={theme!} changeTheme={changeTheme!}/>
        <AvatarUser path='/profile' className="ml-4"/>
      </div>
    </div>
  );
}
