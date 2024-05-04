import AdminTable from "../../layout/admin-table/AdminTable";
import "./ManageProducts.scss";
import { useLocation } from "react-router-dom";


const ManageProducts = () => {
  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <div className="manage-products">
            <div className="title">
        <h1>Manage Products</h1>
      </div>
    <AdminTable/>
    </div>
  );
};

export default ManageProducts;
