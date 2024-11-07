import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component }:IPrivateRoute) => {
    const navigate = useNavigate();
    const {floorId} = useParams<{floorId: string}>();
    const floorAccess = useSelector((state: {floorAccess: {floorAccess: boolean[]}}) => 
    state.floorAccess.floorAccess);

    const floorIndex = parseInt(floorId || "-1", 10);

    useEffect(() => {
        if (floorIndex < 0 || floorIndex >= floorAccess.length || !floorAccess[floorIndex]) {
            navigate('/forbidden'); 
        }
    }, [floorIndex, floorAccess, navigate]);

    return (
        <>
            {floorIndex >= 0 && floorIndex < floorAccess.length && floorAccess[floorIndex] ? component : null}
        </>
    );
};

export default PrivateRoute