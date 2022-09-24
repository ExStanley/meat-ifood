import EntityBase from "src/app/models/base.model";

export interface Restaurant extends EntityBase {
  name: string;
  category: string;
  deliveryEstimate: string;
  rating: number;
  imagePath: string;
}
