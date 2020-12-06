/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateAssetInput = {
  id?: string | null;
  symbol: string;
  exchange?: string | null;
};

export type ModelAssetConditionInput = {
  symbol?: ModelStringInput | null;
  exchange?: ModelStringInput | null;
  and?: Array<ModelAssetConditionInput | null> | null;
  or?: Array<ModelAssetConditionInput | null> | null;
  not?: ModelAssetConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateAssetInput = {
  id: string;
  symbol?: string | null;
  exchange?: string | null;
};

export type DeleteAssetInput = {
  id?: string | null;
};

export type ModelAssetFilterInput = {
  id?: ModelIDInput | null;
  symbol?: ModelStringInput | null;
  exchange?: ModelStringInput | null;
  and?: Array<ModelAssetFilterInput | null> | null;
  or?: Array<ModelAssetFilterInput | null> | null;
  not?: ModelAssetFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateAssetMutation = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAssetMutation = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAssetMutation = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetAssetQuery = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAssetsQuery = {
  __typename: "ModelAssetConnection";
  items: Array<{
    __typename: "Asset";
    id: string;
    symbol: string;
    exchange: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAssetSubscription = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAssetSubscription = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAssetSubscription = {
  __typename: "Asset";
  id: string;
  symbol: string;
  exchange: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAsset(
    input: CreateAssetInput,
    condition?: ModelAssetConditionInput
  ): Promise<CreateAssetMutation> {
    const statement = `mutation CreateAsset($input: CreateAssetInput!, $condition: ModelAssetConditionInput) {
        createAsset(input: $input, condition: $condition) {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAssetMutation>response.data.createAsset;
  }
  async UpdateAsset(
    input: UpdateAssetInput,
    condition?: ModelAssetConditionInput
  ): Promise<UpdateAssetMutation> {
    const statement = `mutation UpdateAsset($input: UpdateAssetInput!, $condition: ModelAssetConditionInput) {
        updateAsset(input: $input, condition: $condition) {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAssetMutation>response.data.updateAsset;
  }
  async DeleteAsset(
    input: DeleteAssetInput,
    condition?: ModelAssetConditionInput
  ): Promise<DeleteAssetMutation> {
    const statement = `mutation DeleteAsset($input: DeleteAssetInput!, $condition: ModelAssetConditionInput) {
        deleteAsset(input: $input, condition: $condition) {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAssetMutation>response.data.deleteAsset;
  }
  async GetAsset(id: string): Promise<GetAssetQuery> {
    const statement = `query GetAsset($id: ID!) {
        getAsset(id: $id) {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAssetQuery>response.data.getAsset;
  }
  async ListAssets(
    filter?: ModelAssetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAssetsQuery> {
    const statement = `query ListAssets($filter: ModelAssetFilterInput, $limit: Int, $nextToken: String) {
        listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            symbol
            exchange
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAssetsQuery>response.data.listAssets;
  }
  OnCreateAssetListener: Observable<
    SubscriptionResponse<OnCreateAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAsset {
        onCreateAsset {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAssetSubscription>>;

  OnUpdateAssetListener: Observable<
    SubscriptionResponse<OnUpdateAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAsset {
        onUpdateAsset {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAssetSubscription>>;

  OnDeleteAssetListener: Observable<
    SubscriptionResponse<OnDeleteAssetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAsset {
        onDeleteAsset {
          __typename
          id
          symbol
          exchange
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAssetSubscription>>;
}
