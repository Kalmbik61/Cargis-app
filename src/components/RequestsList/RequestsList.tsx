import { Text, RefreshControl, View, ViewStyle } from "react-native";
import { IRequestsListProps } from "./RequestsList.props";
import { FlatList } from "react-native-gesture-handler";
import { stylesOf } from "classnames-rn";
import styles from "./RequestsList.styles";
import Request from "../Request/Request";
import useSWR from "swr";
import {
  IOrder,
  IOrderListResponse,
  getOrderList,
} from "../../service/getOrdersList";
import { useEffect, useState } from "react";
import Loader from "../global/Loader/Loader";
import { FILTER_TYPE } from "../FiltersList/FiltersList";
import { COLORS } from "../../styles/styles";
import Accordion from "../global/Accordion/Accordion";

const st = stylesOf(styles);
export default function RequestsList({ ...props }: IRequestsListProps) {
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState<string>(
    `&status_1c[0]=active&status_1c[1]=on_pause&status_1c[3]=completed`,
  );
  const { data, error, isLoading, isValidating, mutate } =
    useSWR<IOrderListResponse>(`page=${page}${url}`, url => getOrderList(url), {
      onSuccess(data) {
        setOrders(prev => [...prev, ...data.orders]);
        setRefreshing(false);
      },
      keepPreviousData: true,
    });
  const [orders, setOrders] = useState<IOrder[]>(data?.orders || []);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const setFilteredUrl = (): string => {
    // ставим фильтры
    let filteredUrl = "";
    Object.values(FILTER_TYPE).forEach((f, i) => {
      if (f === "ALL") return;
      filteredUrl += `&status_1c[${i - 1}]=${
        props.currentFilter === f ? f : null
      }`;
    });
    return filteredUrl;
  };

  useEffect(() => {
    setPage(0);
    setOrders([]);
    if (props.currentFilter === FILTER_TYPE.ALL) {
      setUrl(
        `&status_1c[0]=active&status_1c[1]=on_pause&status_1c[3]=completed`,
      );
      return;
    }
    // но при разных фильтрах все равно отдается active всегда, хоть в тестовом и не просилось сделать фильтрацию (рабочую) -  сделанo
    setUrl(setFilteredUrl());
  }, [props.currentFilter]);

  if (page === 0 && (isLoading || isValidating) && !refreshing)
    return <Loader />;

  if (error) return <Text>Ошибка! Попробуйте позже</Text>;

  if (!orders) return <Text>Нет заявок</Text>;

  const onLoadMore = () => {
    if (page === data?.total_page) return;
    setPage(page + 1);
  };

  const onRefetch = () => {
    setRefreshing(true);
    setOrders([]);
    mutate();
  };
  return (
    <View style={st("wrapper")}>
      <FlatList
        contentContainerStyle={st("contentWrapper")}
        data={orders}
        keyExtractor={item => item.cargo_type + item.id}
        renderItem={({ item }) => <Request order={item} />}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefetch}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
            size={14}
          />
        }
      />
      {isValidating && <Loader styles={st("loader") as ViewStyle} />}
    </View>
  );
}
