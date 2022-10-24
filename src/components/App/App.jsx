import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "components/EventBoard/EventBoard";
import upcomingEvent from "../../upcoming-events.json";
import styled from "@emotion/styled";
import { Container } from "./App.styled";
import {
  HiArchive,
  HiCloudDownload,
  HiCog,
  HiOutlineCake,
} from "react-icons/hi";
import { Button } from "components/Button/Button";
import { TextLorem } from "components/Text/Text";
import { Box } from "./Box";


const Text = styled.p``;

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvent} />
      <Box display="flex" alignItems="center" position="relative" as="main">
        <Box display="flex" justifyContent="flex-end" mt={4} as="section">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            architecto?
          </Text>
        </Box>
        <Box as="section" mt={6}>
        <Button icon={HiArchive}>Search</Button>
        <Button icon={HiCloudDownload}>Filter</Button>
        <Button icon={HiCog}>Show Modal</Button>
        <Button icon={HiOutlineCake} type="submit">
          LogIn
        </Button>
        <Button type="submit" disabled>
          LogIn
        </Button>
        </Box>
        <TextLorem text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, soluta!" />
      </Box>
    </Container>
  );
};
