import { FC } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ViewStyle,
  TextStyle,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { ROUTES } from "../../../utils/routes";
import { stylesOf } from "classnames-rn";
import styles from "./Details.styles";
import Card from "../../components/global/Card/Card";
import useSWR from "swr";
import Accordion from "../../components/global/Accordion/Accordion";
import TextBlock from "../../components/global/TextBlock/TextBlock";
import Request from "../../components/Request/Request";
import { IOrderInfo, getOrderInfo } from "../../service/getOrderInfo";
import Loader from "../../components/global/Loader/Loader";

import Arrow from "../../assets/icons/arrow_primary.svg";
import Employer from "../../components/Employer/Employer";
import Contact from "../../components/global/Contact/Contact";
import Button from "../../components/global/Button/Button";

const st = stylesOf(styles);

type DetailScreenRouteProp = RouteProp<RootStackParamList, ROUTES.DETAILS>;

type DetailScreenProps = {
  route: DetailScreenRouteProp;
};

const Details: FC<DetailScreenProps> = ({ route }) => {
  const id = route.params.orderId;

  const { data, error, isLoading } = useSWR<IOrderInfo>(
    `v1/orders/${id}`,
    url => getOrderInfo(url),
  );

  if (isLoading) return <Loader />;

  if (error) {
    return <Text>Error loading data</Text>;
  }

  if (!data) {
    return <Text>Нет данных</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={st("content")}>
          {/* все дальнейшие компоненты можно вынести в обособленные (деленные по функционалу) */}
          <Card>
            <Accordion
              title={
                <Text style={st("cardTitle")}>Календарь суточной загрузки</Text>
              }
            >
              <Text>КАЛЕНДАРЬ</Text>
            </Accordion>
          </Card>
          <Card>
            <Accordion
              title={<Text style={st("cardTitle")}>Детали заявки</Text>}
            >
              <View>
                <Request.Employer company={{ short_name: data.consignee }} />
                <View style={st("contacts")}>
                  <Text style={st("contactsTitle")}>Показать контакты</Text>
                  <Arrow width={10} height={10} />
                </View>
              </View>
            </Accordion>
          </Card>

          <Card>
            <Accordion
              title={<Text style={st("cardTitle")}>Детали перевозки</Text>}
            >
              <Request.Destination
                load_ad={data.loading_address}
                unload_ad={data.unloading_address}
              />
              <Request.AdditionalBlock order={data} period />
              {!!data.additional_info && (
                <TextBlock title="Комментарий">
                  <Text>{data.additional_info}</Text>
                </TextBlock>
              )}
            </Accordion>
          </Card>

          {/* можно вынести в отдельные компоненты */}
          <Card>
            <Accordion title={<Text style={st("cardTitle")}>Погрузка</Text>}>
              <TextBlock
                title="Грузоотправитель"
                titleBottom={`ИНН: ${data.shipper_inn}`}
              >
                <Employer protected info>
                  {data.shipper_company_shortname}
                </Employer>
              </TextBlock>
              <TextBlock title="Ответственный представитель">
                <Contact
                  name={data.shipper_contact}
                  phone={data.shipper_contact_phone}
                />
              </TextBlock>
            </Accordion>
          </Card>

          <Card>
            <Accordion title={<Text style={st("cardTitle")}>Выгрузка</Text>}>
              <TextBlock
                title="Грузополучатель"
                titleBottom={`ИНН: ${data.consignee_inn}`}
              >
                <Employer protected info>
                  {data.consignee}
                </Employer>
              </TextBlock>
              <TextBlock title="Ответственный представитель">
                <Contact
                  name={data.consignee_contact}
                  phone={data.consignee_contact_phone}
                />
              </TextBlock>
            </Accordion>
          </Card>
        </View>
      </ScrollView>

      <View style={st("bottom")}>
        <Button
          wrapperStyle={st("btnWrapper") as ViewStyle}
          textStyle={st("btn") as TextStyle}
        >
          Отправить отклик
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Details;
