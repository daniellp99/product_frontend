import { FragmentType, graphql, useFragment } from "@/gql";
import SubCategory from "./SubCategoryItem";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const CategoryFragment = graphql(/* GraphQL */ `
  fragment CategoryFragment on CategoryType {
    id
    name
    subCategories {
      edges {
        node {
          ...SubCategoryFragment
        }
      }
    }
  }
`);

const Category = (props: {
  category: FragmentType<typeof CategoryFragment>;
}) => {
  const category = useFragment(CategoryFragment, props.category);
  return (
    <Accordion type="single" collapsible className="w-full px-3 py-2">
      <AccordionItem
        key={`category-${category.id}`}
        value={`item-${category.id}`}
      >
        <AccordionTrigger>{category.name}</AccordionTrigger>
        <AccordionContent>
          {category.subCategories.edges.map(
            (subCategory, i) =>
              subCategory?.node && (
                <SubCategory
                  key={`subcategory-${i}`}
                  subCategory={subCategory.node}
                />
              )
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Category;
