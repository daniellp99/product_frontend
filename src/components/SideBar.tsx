import { graphql } from "@/gql";
import { AllCategoriesWithSubcategoriesDocument } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { gqlClient } from "@/utils/graphql-client";
import CategoryAccordion from "./CategoryAccordion";

const allCategoriesWithSubcategories = graphql(/* GraphQL */ `
  query allCategoriesWithSubcategories {
    allCategories {
      edges {
        node {
          ...CategoryFragment
        }
      }
    }
  }
`);

async function getCategories() {
  return await gqlClient.request(AllCategoriesWithSubcategoriesDocument);
}

export default async function SideBar({
  className,
}: {
  className: React.ComponentProps<"aside">["className"];
}) {
  const initialCategories = await getCategories();
  return (
    <aside className={cn("pb-12 bg-secondary", className)}>
      <div className="py-4">
        <CategoryAccordion initialData={initialCategories} />
      </div>
    </aside>
  );
}
