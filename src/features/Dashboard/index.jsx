import Button from "../../components/common/Button";
import { LayoutDashboard } from "lucide-react";
import { goldenYellow } from "../../utils/color";
import { productsPath } from "../../utils/path";


const Dashboard = () => {
    return (
        <div>
            <h1 className="">Dashboard</h1>
            <Button
                size="medium"
                name="Dashboard"
                color="red"
                backgroundColor={goldenYellow}
                icon={<LayoutDashboard />}
                to={productsPath}
            />
            <Button
                size="medium"
                width='full'
                name="Products"
                icon={<LayoutDashboard />}
                to={productsPath}
            />
        </div>
    );
};

export default Dashboard;