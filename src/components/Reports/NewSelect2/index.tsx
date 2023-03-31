import Select from "react-select";
import { Path, useForm, Controller, UseFormRegister } from "react-hook-form";

import {
  Container,
  TextInputContainer,
  SelectContent,
  Option,
  Label,
  TypeError,
} from "./styles";


interface SelectInputProps{
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const NewSelect2 = ({
  error,
  label,
  children
}: SelectInputProps) => {
  return (
    <Container>
      <TextInputContainer>
        <Label>
          {label}
          <TypeError>{error}</TypeError>
        </Label>
          {children}
      </TextInputContainer>
    </Container>
  );
};


interface IOption {
  readonly value: string;
  readonly label: string;
}

interface ISelectProps {
  optionsName?: IOption[];
  label?: string;
  error?: string;
  defaultValueOptions: any;
  required: boolean;
  name: string;
  control: any;
}

const NewSelect3 = ({
  optionsName,
  label,
  error,
  defaultValueOptions,
  required,
  name,
  control
}: ISelectProps) => {
  // const { control } = useForm();

  return (
    <Container>
    <TextInputContainer>
      <Label>
        {label}
        <TypeError>{error}</TypeError>
      </Label>
      <Controller
        name="name"
        control={control}
        render={({field}) => (
          <Select
            {...field}
            options={optionsName}
            styles={{
              indicatorSeparator: (provided, state) => ({
                ...provided,
                position: "absolute",
                top: "-23px",
                bottom: "0",
                height: "40px",
              }),
              clearIndicator: (provided, state) => ({
                ...provided,
                position: "absolute",
                top: "2px",
                width: "30px",
                right: "35px",
                color: "#AA2834",
                ":hover": {
                  color: "#F75A68",
                },
                cursor: "pointer",
              }),
              indicatorsContainer: (provided, state) => ({
                ...provided,
                width: "40px",
                height: "12px",
                cursor: "pointer",
              }),
              
              container: (provided, state) => ({
                ...provided,
                width: "245px",
                height: "31px",
                right: "1rem",
              }),
              control: (provided, state) => ({
                ...provided,
                border: "none",
                boxShadow: "none",
                backgroundColor: "transparent",
                fontSize: "1.6rem",
                color: "#121214",
                fontWeight: "bold",
                fontFamily: "__Inter_9c9965",
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "white" : "black",
                backgroundColor: state.isSelected
                  ? "#3996E0"
                  : "white",
                ":hover": {
                  backgroundImage:
                    "linear-gradient(90deg, rgba(228, 235, 254, 1) 0%, rgba(211, 243, 240, 1) 100%)",
                  color: "#121214",
                },

                fontSize: "1.4rem",
                cursor: "pointer",
              }),
              placeholder: (provided, state) => ({
                ...provided,
                color: "#7C7C8A",
                fontSize: "1.2rem",
                fontWeight: "normal",
              }),
            }}
            placeholder="Selecione"
            defaultValue={defaultValueOptions ? defaultValueOptions : null}
            isSearchable={false}
            required={required}
          />
        )}
      />
    </TextInputContainer>
  </Container>
  );
};


export {NewSelect2, NewSelect3}
