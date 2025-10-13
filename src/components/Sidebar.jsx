import { lightGray } from "../utils/color";
import Link from './common/Link';
import { productsPath, dashboardPath } from "../utils/path";
import { LayoutDashboard, Package } from "lucide-react";
import { Avatar } from "../styled/navigation";

export const Sidebar = () => {
    return (
        <div>
            <div className="p-2 sidebar-navigation">
                <div className="h-[60px] mt-5 flex items-center px-4 rounded-lg mb-6">
                    <Avatar className="mr-2" />
                    <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
                </div>
                <Link
                    size="medium"
                    width='full'
                    name="Dashboard"
                    icon={<LayoutDashboard />}
                    to={dashboardPath}
                    backgroundColor="white"
                />
                <Link   
                    size="medium"
                    width='full'
                    name="Products"
                    icon={<Package />}
                    to={productsPath}
                    backgroundColor="white"
                />
                {/* <ul>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Link 1</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Link 2</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Link 3</a>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};
