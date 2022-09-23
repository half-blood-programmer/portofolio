import { Heading, Table, Tbody, Td, Tr } from "@chakra-ui/react";

const Educational = () => (
  <>
    {" "}
    <Heading as="h3" fontSize={20} mb={3} mt={10}>
      Educational Background
    </Heading>
    <Table
      sx={{
        bgColor: "#bee3f80f",
        borderRadius: "10px",
      }}
    >
      <Tbody>
        <Tr>
          <Td rowSpan={2}>Vocational High School 1 Wonosobo</Td>
          <Td pl={1}>Major Software Engineering</Td>
        </Tr>
        <Tr>
          <Td fontSize={12} pl={1}>
            Completed study on time in 2019, with an average school exam score
            of 8.9
          </Td>
        </Tr>
        <Tr>
          <Td rowSpan={2} borderBottom={"none"}>
            State Financial Polytechnic STAN
          </Td>
          <Td pl={1}>Major State Treasury</Td>
        </Tr>
        <Tr>
          <Td fontSize={12} pl={1} borderBottom={"none"}>
            Completed study on time in 2022, with GPA score 3,67
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </>
);

export default Educational;
