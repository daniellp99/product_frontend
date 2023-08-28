import { FragmentType, graphql, useFragment } from "@/gql";
import { Button } from "@/components/ui/button";

export const SubCategoryFragment = graphql(/* GraphQL */ `
  fragment SubCategoryFragment on SubCategoryType {
    id
    name
  }
`);

const SubCategory = (props: {
  subCategory: FragmentType<typeof SubCategoryFragment>;
}) => {
  const subCategory = useFragment(SubCategoryFragment, props.subCategory);
  return (
    <Button variant="link" size="sm" className="w-full justify-start">
      {subCategory.name}
    </Button>
  );
};

export default SubCategory;
