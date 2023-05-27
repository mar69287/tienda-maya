import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({setSearchText}) => {
  const ref = useRef(null);

  return (
    <form
      // className="searchInput"
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     if (ref.current) setSearchText(ref.current.value);
      //     console.log('triggered')
      //   }}
    >
      <InputGroup width={{ base: "100%", md: "20rem", lg: "30rem" }}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={5}
          placeholder="Search items..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;