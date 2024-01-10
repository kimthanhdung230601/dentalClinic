import axios, { AxiosResponse } from 'axios';

// Định nghĩa một sản phẩm thuốc
interface DrugProduct {
  product_number: string;
  product_type: string;

}

// Hàm để truy vấn thông tin sản phẩm thuốc dựa trên mã vạch
async function getDrugInfoByBarcode(barcode: string): Promise<DrugProduct | null> {
  try {
    const response: AxiosResponse<any> = await axios.get('https://api.fda.gov/drug/ndc.json', {
      params: {
        search: `product_ndc:${barcode}`,
      },
    });

    if (response.status === 200) {
      // Trích xuất thông tin sản phẩm từ phản hồi API
      const drugInfo: DrugProduct = response.data.results[0];
      return drugInfo;
    } else {
      console.error('Không thể truy cập dữ liệu từ API.');
      return null;
    }
  } catch (error) {
    console.error('Lỗi trong quá trình gửi yêu cầu API:', error);
    return null;
  }
}

// Sử dụng hàm để truy xuất thông tin sản phẩm thuốc
const barcode = '0615-8252'; // Điều chỉnh mã vạch dựa trên nhu cầu
getDrugInfoByBarcode(barcode)
  .then(drugInfo => {
    console.log(drugInfo);
    
  });
const Ex = () => {
    
    return ( <></> );
}
 
export default Ex;