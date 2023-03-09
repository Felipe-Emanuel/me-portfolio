import { Paragraph } from "@/components/template/utils/Paragraph";
import { useEffect, useState } from "react";
import { useAuth } from "@/data/hook/useAuth";
import { useProfile } from "@/data/hook/useProfile";
import { CloseEyeIcon, EditIcon, OpenEyeIcon } from "@/components/icons";

interface ProfileInfoProps {
  userName: string;
}

export function ProfileInfo({ userName }: ProfileInfoProps) {
  const {
    value,
    isModal,
    message,
    capitalizeName,
    validateInput,
    setValue,
    setIsModal,
    submit,
  } = useProfile();
  const { user } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    value.length < 3 || value.length > 30
      ? setDisabled(true)
      : setDisabled(false);
    value.length > 30
      ? setErrorMessage("O Nome deve conter no máxiomo 30 caracteres")
      : setErrorMessage("");
  }, [value]);

  const buttonStyles = `
    transition-all w-fit bg-gradient-to-br from-blueLight hover:via-HooverBlueLight
    dark:from-orangeDark dark:hover:brightness-110  py-1 px-4 rounded
  `;

  function renderUserInfo() {
    return (
      <div
        className="bg-light/75 dark:bg-dark/75 mx-auto h-fit
        w-full max-w-lg py-4 px-2 flex flex-col gap-4 rounded-md"
      >
        {userName === "" ? (
          <button
            onClick={() => setIsModal((isModal) => !isModal)}
            className={buttonStyles}
          >
            <Paragraph as="span" size="xs">
              Fornecer Nome
            </Paragraph>
          </button>
        ) : (
          <div className="border-b border-blueLight dark:border-orangeDark">
            <Paragraph as="span" size="xs" className="font-bold">
              Nome
            </Paragraph>

            <div className="justify-between flex gap-4 items-center w-full pb-1">
              <Paragraph size="xs" className="opacity-75">
                {capitalizeName()}
              </Paragraph>

              <button
                title="Editar Nome"
                onClick={() => setIsModal((isModal) => !isModal)}
                className={buttonStyles}
              >
                <Paragraph as="span" size="xs">
                  <EditIcon />
                </Paragraph>
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col border-b border-blueLight dark:border-orangeDark pb-1">
          <Paragraph as="span" size="xs" className="font-bold">
            Endereço de e-mail
          </Paragraph>
          <div className="justify-between flex gap-4 items-center">
            <Paragraph
              title={user?.email}
              size="xs"
              className="opacity-75 truncate w-full"
            >
              {isEmail ? user?.email : "**********"}
            </Paragraph>
            <button
              title="Mostrar e-mail"
              onClick={() => setIsEmail((isEmail) => !isEmail)}
              className={buttonStyles}
            >
              <Paragraph as="span" size="xs">
                {isEmail ? <OpenEyeIcon /> : <CloseEyeIcon />}
              </Paragraph>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function renderModal() {
    const disabledStyle = "disabled:cursor-not-allowed disabled:bg-red-500";

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-light/75 dark:bg-dark/75 mx-auto h-fit w-full max-w-lg py-4 px-2 rounded-md"
      >
        <label className="flex flex-col gap-4">
          <Paragraph as="span" size="xs">
            Como gostaria de ser chamado?
          </Paragraph>
          <input
            placeholder="Insira seu nome"
            type="text"
            className="font-default text-xs outline-none bg-transparent border-b border-blueLight
            dark:border-orangeDark text-black dark:text-white"
            value={value}
            onChange={(e) => {
              const inputValue = e.target.value;
              validateInput(inputValue) && setValue(inputValue);
            }}
          />

          <div className="flex gap-4 items-center">
            <button
              disabled={disabled}
              className={`${buttonStyles} ${disabledStyle}`}
              onClick={() => submit(value)}
            >
              <Paragraph as="span" size="xs">
                Enviar
              </Paragraph>
            </button>
            <Paragraph as="span" size="xs" className="text-red-400">
              {errorMessage}
            </Paragraph>
            {value.length < 30 && (
              <button
                className={`${buttonStyles} bg-gray-600`}
                onClick={() => {
                  setIsModal((isModal) => !isModal), setValue("");
                }}
              >
                <Paragraph as="span" size="xs">
                  Cancelar
                </Paragraph>
              </button>
            )}
          </div>
        </label>
      </form>
    );
  }

  return (
    <>
      <Paragraph size="xs" className="text-center pb-1">
        {message}
      </Paragraph>
      {isModal ? renderModal() : renderUserInfo()}
    </>
  );
}
