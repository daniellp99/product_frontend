"use client";

import { useQuery } from "@tanstack/react-query";

import {
  AllCategoriesWithSubcategoriesDocument,
  AllCategoriesWithSubcategoriesQuery,
} from "@/gql/graphql";
import { gqlClient } from "@/utils/graphql-client";
import Category from "./CategoryItem";

export default function CategoryAccordion({
  initialData,
}: {
  initialData: AllCategoriesWithSubcategoriesQuery;
}) {
  const { data } = useQuery({
    queryKey: ["Categories"],
    queryFn: async () =>
      gqlClient.request(AllCategoriesWithSubcategoriesDocument),
    initialData: initialData,
  });
  return (
    <div>
      {" "}
      {data &&
        data.allCategories?.edges.map(
          (category, i) =>
            category?.node && (
              <Category key={`category-${i}`} category={category.node} />
            )
        )}
    </div>
  );
}
