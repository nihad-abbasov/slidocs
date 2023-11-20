import { textRoutes } from "../../../../../db";
import { ContentLayout } from "../../../../components/layout/ContentLayout/ContentLayout";
import { NotFound } from "../../../../components/layout/NotFound/NotFound";

export default function Content({ params }) {
  const currentRoute = textRoutes.find(
    (route) => route.url === `/${params.contentName}`
  );

  if (!currentRoute) {
    return <NotFound />;
  }

  return <ContentLayout currentRoute={currentRoute} />;
}
