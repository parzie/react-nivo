import { useEffect, useState } from "react";
import CardsGrid from "../../components/CardsGrid";
import { ModelResponse } from "../../interfaces";
import { CircularProgress, Container, Divider, Typography } from "@mui/joy";
import { getModels } from "../../api/getModels";
import BasicCard from "../../components/BasicCard";

const Inventory = () => {
  const [models, setModels] = useState<ModelResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { loading, data } = await getModels();
        console.log("loading: ", loading);
        if (!loading) {
          setModels(data as ModelResponse[]);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    getData()
  }, []);

  const renderModelCards = (model: ModelResponse) => {
    return <BasicCard name={model.model_name} type={model.model_type} />
  }

  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4">
        <Typography level="h1">Inventory</Typography>
        <Divider />
        {isLoading ?
          <CircularProgress variant="solid" className="place-self-center" /> :
          <CardsGrid items={models} renderItem={renderModelCards} columns={3} />
        }
      </div>
    </Container>
  );
};

export default Inventory;
