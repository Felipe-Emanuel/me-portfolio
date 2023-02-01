import { useAppData } from "@hook/useAppData";
import { ButtonTheme } from "@utils/ButtonTheme";
import { AvatarUser } from "@layout/AvatarUser";
import { Title } from "@utils/Title";

interface TopBarProps {
  title: string;
  subtitle: string;
}

export function TopBar({ title, subtitle }: TopBarProps) {
  const {theme, changeTheme} = useAppData()


  return (
    <div className="flex items-center z-10">
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonTheme theme={theme!} changeTheme={changeTheme!}/>
        <AvatarUser path='/profile' className="ml-4 flex"/>
      </div>
    </div>
  );
}
