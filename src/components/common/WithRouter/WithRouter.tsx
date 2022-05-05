import { JSXElementConstructor } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const WithRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
				{ ...props }
				router = {{ location, navigate, params }
  }
  />
		);
	}

return ComponentWithRouterProp;
}