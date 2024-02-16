import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";
import { BreadcrumbsDefault5 } from "../Components/Breadp";

const Packages6 = () => {
  return (
    <div>
      <BreadcrumbsDefault5 />
      <Card className="w-full flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1600045956971-716146cd72ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-6
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Ajmer sharif Tour
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Dargah Sharif or Ajmer Sharif is the tomb of a sufi saint, Khwaja
            Moinuddin Chishti, who came to Ajmer from Persia in 1192. Hazrat
            Khwaja Moinuddin Hasan Chishti occupies a prominent place amongst
            the spiritual healers of the world. Constructed with a white marble,
            it has 11 arches and a Persian inscription running through the full
            length of the building. It has a marble dome and the actual tomb
            inside is surrounded by a silver platform. The tomb attracts
            hundreds of thousands of pilgrims every year on the death
            anniversary of the saint.
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            People from every religion, caste, creed come here and offer a
            traditional {"chadar"} to seek blessings of this Sufi saint. Nothing
            can beat the {"qawwali"} at Khwaja Garib Nawaz Dargah which has a
            magical power that rarely leaves any member of the audience
            un-touched. Due to its charitable work, the shrine is commonly known
            as Gharib Nawaz, the benefactor of the poor. Not only the common
            people, even the mighty kings of India, both Muslim and Hindu, have
            paid their homage to the great saint.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            The major sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Ana Sagar Lake</ListItem>
              <ListItem>Durga Bagh</ListItem>
              <ListItem>Nareli Jain</ListItem>
              <ListItem>Lake Foy Sagar </ListItem>
              <ListItem>Soniji Ki Nashaniya</ListItem>
            </List>
          </Card>
          <a href="contact" className="inline-block mt-7">
            <Button variant="text" className="flex items-center gap-2">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Packages6;
