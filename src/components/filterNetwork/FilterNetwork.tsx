import {
  ButtonStyle,
  ContainerButton,
  ContainerFilter,
  ErrorLabel,
  FilterContainer,
  FormNetWork,
  GroupFilters,
  Label,
  SelectDropdown,
  TextInput,
} from "./FilterNetwork.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Country, State, Status } from "../../services/getNetwork.models";
import { IFilterNetwork } from "./FilterNetwork.model";
import { Iform } from "../../pages/Dashboard/Dashboard.model";


const FilterNetwork = ({ filter, onSearch } : IFilterNetwork) => {

  const schema = yup.object({
    name: yup.string().max(20,"Max 20 caratteri"),
    city: yup.string().max(20,"Max 20 caratteri"),
  });
  
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Iform>({
    defaultValues: filter,
    // @ts-expect-error
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onReset = () => {
    console.log("reset");
    reset();
    onSearch(getValues());
  };
  return (
    <FilterContainer>
      <FormNetWork onSubmit={handleSubmit((d) => onSearch(d))}>
        <GroupFilters>
          <ContainerFilter>
            <Label>Name</Label>
            <TextInput
              {...register("name")}
              $error={errors.name ? true : false}
            />
            {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
          </ContainerFilter>

          <ContainerFilter>
            <Label>Country</Label>
            <SelectDropdown {...register("country")}>
              {Object.values(Country).map((country) => {
                return <option key={country}>{country}</option>;
              })}
            </SelectDropdown>
          </ContainerFilter>

          <ContainerFilter>
            <Label>State</Label>
            <SelectDropdown {...register("state")}>
              {Object.values(State).map((state) => {
                return <option key={state}>{state}</option>;
              })}
            </SelectDropdown>
          </ContainerFilter>

          <ContainerFilter>
            <Label>Status</Label>
            <SelectDropdown {...register("status")}>
              {Object.values(Status).map((state) => {
                return <option key={state} value={state}>{state}</option>;
              })}
            </SelectDropdown>
          </ContainerFilter>

          <ContainerFilter>
            <Label>City</Label>
            <TextInput
              {...register("city")}
             $error={errors.city ? true : false}
            />
            {errors.city && <ErrorLabel>{errors.city.message}</ErrorLabel>}
          </ContainerFilter>
        </GroupFilters>
        <ContainerButton>
          <ButtonStyle type="submit">search</ButtonStyle>
          <ButtonStyle type="button" onClick={() => onReset()}>reset</ButtonStyle>
        </ContainerButton>
      </FormNetWork>
    </FilterContainer>
  );
};

export default FilterNetwork;
