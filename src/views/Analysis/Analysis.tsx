import { CircularProgress, Container, Divider, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnalysisResponse } from "../../interfaces";
import { getAnalysis } from "../../api/getAnalysis";
import CardsGrid from "../../components/CardsGrid";
import BarChartCard from "../../components/BarChartCard";
import { BarDatum } from "@nivo/bar";
import { FEATURE_LIST, VARIABLE_RANKING } from "../../constants";

const Analysis = () => {

  const { modelName } = useParams();
  const [analysisList, setAnalysisList] = useState<AnalysisResponse[][]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!modelName) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const { loading, data } = await getAnalysis(modelName);
        if (!loading && data.length && data[0]?.length) {
          setAnalysisList(data as AnalysisResponse[][]);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }

    getData()
  }, [modelName]);

  const renderChartCard = (analysisResponse: AnalysisResponse[]) => {
    const featureList = analysisResponse.find((item) => item.insight_name === FEATURE_LIST);
    const chartKeys = (featureList?.value ? featureList.value : []) as string[];
    const variableRankingList = analysisResponse.filter((item) => item.insight_name === VARIABLE_RANKING);
    const normalizedData = normalizeData(variableRankingList) as BarDatum[];

    return <BarChartCard data={normalizedData} keys={chartKeys} />
  }


  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4">
        <Typography level="h1">{modelName}</Typography>
        <Divider />
        {isLoading ?
          <CircularProgress variant="solid" className="place-self-center" /> :
          <CardsGrid items={analysisList} renderItem={renderChartCard} columns={2} />}
      </div>
    </Container>
  );
};

const normalizeData = (dataList: AnalysisResponse[]) => {
  return dataList.map(({ value, ...item }) => ({ ...value, ...item }));
}

export default Analysis;
