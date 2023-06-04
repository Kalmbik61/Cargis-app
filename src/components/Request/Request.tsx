import {
  IRequestAdditionalBlockProps,
  IRequestCargoTypeProps,
  IRequestDestinationProps,
  IRequestDistanceProps,
  IRequestEmployerProps,
  IRequestPeriodProps,
  IRequestProps,
  IRequestTarifProps,
  IRequestTonnageProps,
} from "./Request.props";
import { stylesOf } from "classnames-rn";
import styles from "./Request.styles";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import Card from "../global/Card/Card";
import TextBlock from "../global/TextBlock/TextBlock";
import Employer from "../Employer/Employer";
import Point from "../Point/Point";
import { POINT_TYPE } from "../Point/Point.props";
import { RUB } from "../../constants/curr";
import Button from "../global/Button/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ROUTES } from "../../../utils/routes";
import { RootStackParamList } from "../../../App";
import RequestTitle from "../RequestTitle/RequestTitle";
import Accordion from "../global/Accordion/Accordion";
import { getTime } from "../../../utils/getTime";

const st = stylesOf(styles);

function Request({ order }: IRequestProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressInfo = () =>
    navigation.navigate(ROUTES.DETAILS, {
      created_at: order.create_dt,
      views: order.views_count,
      type: order.status_1c,
      orderNumber: order.order_number || `${order.id}`,
      orderId: order.id,
    });

  return (
    <Card wrapperStyles={st("wrapper") as ViewStyle}>
      <Accordion
        title={
          <RequestTitle
            orderNumber={order.order_number || `${order.id}`}
            created_at={order.create_dt}
            date_at={order.load_dt}
            date_to={order.ending_dt}
            views={order.views_count}
            type={order.status_1c}
          />
        }
      >
        <View style={st("contentWrapper")}>
          <Request.Employer company={order.company} />
          <Request.Destination
            load_ad={order.load_dt}
            unload_ad={order.unloading_address}
          />
          {/* Можно вынести в отдельные компоненты */}
          <Request.AdditionalBlock order={order} />
          {/* Можно вынести в отдельные компоненты */}
          <View style={st("btns")}>
            <View style={st("btnWrapper")}>
              <Button
                textStyle={st("btnInfoText") as TextStyle}
                onPress={onPressInfo}
              >
                Подробнее
              </Button>
            </View>
            <View style={st("btnWrapper")}>
              <Button
                wrapperStyle={st("btnReviewWrapper") as ViewStyle}
                textStyle={st("btnReviewText") as TextStyle}
              >
                Оставить отклик
              </Button>
            </View>
          </View>
        </View>
      </Accordion>
    </Card>
  );
}

Request.Employer = ({ company }: IRequestEmployerProps) => {
  return (
    <TextBlock title="Заказчик">
      <Employer info protected>
        {company.short_name}
      </Employer>
    </TextBlock>
  );
};

Request.Destination = ({ load_ad, unload_ad }: IRequestDestinationProps) => {
  return (
    <TextBlock title="Маршрут перевозки">
      <Point type={POINT_TYPE.FROM} address={load_ad} />
      <Point type={POINT_TYPE.TO} address={unload_ad} />
    </TextBlock>
  );
};

Request.Tarif = ({ tarif }: IRequestTarifProps) => {
  return (
    <TextBlock title="Тариф">
      <Text>
        {tarif} {RUB}/т <Text style={st("textGrey")}>Без НДС</Text>
      </Text>
    </TextBlock>
  );
};
Request.Tonnage = ({ balance, balance_to }: IRequestTonnageProps) => {
  return (
    <TextBlock title="Всего к перевозке">
      <Text>
        {Math.floor(balance / 1000)} т{" "}
        <Text style={st("textGrey")}>из {Math.floor(balance_to / 1000)} т</Text>
      </Text>
    </TextBlock>
  );
};
Request.Distance = ({ distance }: IRequestDistanceProps) => {
  return (
    <TextBlock title="Расстояние">
      <Text>{Math.floor(distance / 1000)} км</Text>
    </TextBlock>
  );
};
Request.CargoType = ({ type }: IRequestCargoTypeProps) => {
  return (
    <TextBlock title="Груз">
      <Text>{type}</Text>
    </TextBlock>
  );
};
Request.Period = ({ date_at, date_to }: IRequestPeriodProps) => {
  return (
    <TextBlock title="Период перевозки">
      <Text>
        C {getTime(date_at, "DD MMMM YYYY")} по{" "}
        {getTime(date_to, "DD MMMM YYYY")}
      </Text>
    </TextBlock>
  );
};
Request.AdditionalBlock = ({ order, period }: IRequestAdditionalBlockProps) => {
  return (
    <View>
      {period && (
        <Request.Period date_at={order.load_dt} date_to={order.ending_dt} />
      )}
      <View style={st("additionalWrapper")}>
        <View style={st("additional")}>
          <Request.Distance distance={order.distance_m} />
          <Request.CargoType type={order.cargo_type} />
        </View>
        <View style={st("additional")}>
          <Request.Tarif tarif={order.tariff_c} />
          <Request.Tonnage
            balance={order.tonnage_balance_kg}
            balance_to={order.tonnage_kg}
          />
        </View>
      </View>
    </View>
  );
};

export default Request;
