1. Mục tiêu bài tậpTìm hiểu cách khởi tạo và cấu hình môi trường làm việc với Node.js.   Cài đặt và sử dụng thư viện mongodb trong môi trường Visual Studio Code.   Xây dựng đoạn mã JavaScript để kết nối ứng dụng Node.js với cơ sở dữ liệu MongoDB cục bộ (Localhost).2. Các bước thực hiệnBước 1: Khởi tạo thư mục dự án (BAI2/MGDB) trên Visual Studio Code.
2.  Bước 2: Cài đặt gói thư viện quản lý kết nối cơ sở dữ liệu thông qua npm với lệnh:Bashnpm install mongodb
Bước 3: Tạo tập tin create_mongodb.js và cấu hình đoạn mã kết nối sử dụng MongoClient:   JavaScriptconst MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mydb";
const client = new MongoClient(uri);

async function connectToMongoDB() {  
  try {    
    await client.connect();    
    console.log("Connected to MongoDB");  
  } catch (error) {    
    console.error("Error connecting to MongoDB:", error);  
  }
}

connectToMongoDB();
3. Cơ chế hoạt động của chương trìnhKhai báo thư viện và đường dẫn (URI): Chương trình nạp thư viện mongodb và định nghĩa chuỗi kết nối (uri) trỏ đến MongoDB Server đang chạy trên máy cục bộ ở cổng mặc định 27017 với tên cơ sở dữ liệu là mydb.Khởi tạo Client: Tạo một đối tượng MongoClient mới dựa trên chuỗi kết nối đã cung cấp.Hàm kết nối bất đồng bộ (async/await):Sử dụng hàm client.connect() để thiết lập kết nối tới cơ sở dữ liệu MongoDB. Do thao tác kết nối cơ sở dữ liệu mất thời gian (bất đồng bộ), từ khóa await được sử dụng để chờ cho đến khi kết nối hoàn tất.Cấu trúc try...catch giúp bắt lỗi trong trường hợp máy chủ MongoDB chưa được bật hoặc có sự cố về đường truyền, tránh làm sập ứng dụng.Thực thi: Khi gọi hàm connectToMongoDB(), nếu thành công, chương trình sẽ in thông báo Connected to MongoDB ra màn hình Terminal.
