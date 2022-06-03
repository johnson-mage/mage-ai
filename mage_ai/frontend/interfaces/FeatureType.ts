export const COLUMN_TYPE_CATEGORY = 'category';
export const COLUMN_TYPE_CATEGORY_HIGH_CARDINALITY = 'category_high_cardinality';
export const COLUMN_TYPE_DATETIME = 'datetime';
export const COLUMN_TYPE_EMAIL = 'email';
export const COLUMN_TYPE_NUMBER = 'number';
export const COLUMN_TYPE_NUMBER_WITH_DECIMALS = 'number_with_decimals';
export const COLUMN_TYPE_PHONE_NUMBER = 'phone_number';
export const COLUMN_TYPE_TEXT = 'text';
export const COLUMN_TYPE_TRUE_OR_FALSE = 'true_or_false';
export const COLUMN_TYPE_ZIP_CODE = 'zip_code';

export enum ColumnTypeEnum {
  CATEGORY = 'category',
  CATEGORY_HIGH_CARDINALITY = 'category_high_cardinality',
  DATETIME = 'datetime',
  EMAIL = 'email',
  NUMBER = 'number',
  NUMBER_WITH_DECIMALS = 'number_with_decimals',
  PHONE_NUMBER = 'phone_number',
  TEXT = 'text',
  TRUE_OR_FALSE = 'true_or_false',
  ZIP_CODE = 'zip_code',
}

export const COLUMN_TYPE_NUMBERS = [
  COLUMN_TYPE_NUMBER,
  COLUMN_TYPE_NUMBER_WITH_DECIMALS,
];

export const COLUMN_TYPE_NUMBERICAL_LIKE = [
  COLUMN_TYPE_NUMBER,
  COLUMN_TYPE_NUMBER_WITH_DECIMALS,
];

export const COLUMN_TYPE_NUMBERICAL_WITH_DATETIME_LIKE = [
  COLUMN_TYPE_DATETIME,
  COLUMN_TYPE_NUMBER,
  COLUMN_TYPE_NUMBER_WITH_DECIMALS,
];

export const COLUMN_TYPE_WITH_STRINGS = [
  COLUMN_TYPE_CATEGORY,
  COLUMN_TYPE_CATEGORY_HIGH_CARDINALITY,
  COLUMN_TYPE_DATETIME,
  COLUMN_TYPE_EMAIL,
  COLUMN_TYPE_PHONE_NUMBER,
  COLUMN_TYPE_TEXT,
  COLUMN_TYPE_TRUE_OR_FALSE,
];

export const COLUMN_TYPE_STRING_LIKE = [
  COLUMN_TYPE_CATEGORY,
  COLUMN_TYPE_CATEGORY_HIGH_CARDINALITY,
  COLUMN_TYPE_DATETIME,
  COLUMN_TYPE_EMAIL,
  COLUMN_TYPE_PHONE_NUMBER,
  COLUMN_TYPE_TEXT,
];

export const COLUMN_TYPE_CATEGORY_VALUES = [
  COLUMN_TYPE_CATEGORY,
  COLUMN_TYPE_CATEGORY_HIGH_CARDINALITY,
  COLUMN_TYPE_TEXT,
  COLUMN_TYPE_TRUE_OR_FALSE,
];

export const COLUMN_TYPE_HUMAN_READABLE_MAPPING = {
  [COLUMN_TYPE_NUMBER]: 'Number',
  [COLUMN_TYPE_NUMBER_WITH_DECIMALS]: 'Decimal number',
  [COLUMN_TYPE_CATEGORY]: 'Category',
  [COLUMN_TYPE_CATEGORY_HIGH_CARDINALITY]: 'Category (high cardinality)',
  [COLUMN_TYPE_DATETIME]: 'Date/Time',
  [COLUMN_TYPE_EMAIL]: 'Email',
  [COLUMN_TYPE_PHONE_NUMBER]: 'Phone number',
  [COLUMN_TYPE_TEXT]: 'Text',
  [COLUMN_TYPE_TRUE_OR_FALSE]: 'Boolean',
  [COLUMN_TYPE_ZIP_CODE]: 'Zip code',
};

export default interface FeatureType {
  columnType?: string;
  column_type?: string;
  uuid: string;
}