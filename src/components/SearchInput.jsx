import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = ({setSearchText}) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  return (
    <form
      // className="searchInput"
        onSubmit={(event) => {
          event.preventDefault();
          // navigate("/products");
          if (ref.current) {
            navigate("/products");
            setSearchText(ref.current.value);
            ref.current.value = "";
          }
          //   setSearchText(ref.current.value);
          // console.log('triggered')
          // navigate("/products");
        }}
    >
      <InputGroup width={{ base: "100%", md: "20rem", lg: "30rem" }}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={5}
          placeholder="What can we help you find?"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;