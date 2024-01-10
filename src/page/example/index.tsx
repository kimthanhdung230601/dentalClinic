import { useState, useEffect } from 'react';
import moment from 'moment'; // Import thư viện moment
import { useQuery } from 'react-query'; // Import useQuery từ thư viện React Query

const YourComponent = () => {
  const [currentDate, setCurrentPage] = useState<string>(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    setCurrentPage(moment().format('YYYY-MM-DD'));
  }, []);

  const getCalendarPatient = async (currentDate:any) => {
    // Thực hiện gọi API để lấy dữ liệu từ máy chủ
    const response = await fetch(`http://localhost:8080/exams/patient?controlDate=${currentDate}`);
    const data = await response.json();
    return data;
  };

  const {
    data: product,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["product", currentDate], () => getCalendarPatient(currentDate));

  console.log(product);

  const onChange = (page: number) => {
    setCurrentPage(moment().add(page, 'days').format('YYYY-MM-DD'));
  };

  // ...Phần JSX và logic render khác của bạn

  return (
   <>456</>
  );
};

export default YourComponent;
