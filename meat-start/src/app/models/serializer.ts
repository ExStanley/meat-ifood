import EntityBase from "./base.model";

export default interface Serializer {
  fromJson(json: any): EntityBase;
  toJson(entity: EntityBase);
}
