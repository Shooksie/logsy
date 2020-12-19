import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "grid" */
export type Grid = {
  __typename?: 'grid';
  created_at: Scalars['timestamptz'];
  grid: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "grid" */
export type GridGridArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "grid" */
export type Grid_Aggregate = {
  __typename?: 'grid_aggregate';
  aggregate?: Maybe<Grid_Aggregate_Fields>;
  nodes: Array<Grid>;
};

/** aggregate fields of "grid" */
export type Grid_Aggregate_Fields = {
  __typename?: 'grid_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Grid_Max_Fields>;
  min?: Maybe<Grid_Min_Fields>;
};


/** aggregate fields of "grid" */
export type Grid_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Grid_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "grid" */
export type Grid_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Grid_Max_Order_By>;
  min?: Maybe<Grid_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Grid_Append_Input = {
  grid?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "grid" */
export type Grid_Arr_Rel_Insert_Input = {
  data: Array<Grid_Insert_Input>;
  on_conflict?: Maybe<Grid_On_Conflict>;
};

/** Boolean expression to filter rows from the table "grid". All fields are combined with a logical 'AND'. */
export type Grid_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Grid_Bool_Exp>>>;
  _not?: Maybe<Grid_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Grid_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  grid?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "grid" */
export enum Grid_Constraint {
  /** unique or primary key constraint */
  GridPkey = 'grid_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Grid_Delete_At_Path_Input = {
  grid?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Grid_Delete_Elem_Input = {
  grid?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Grid_Delete_Key_Input = {
  grid?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "grid" */
export type Grid_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  grid?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Grid_Max_Fields = {
  __typename?: 'grid_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "grid" */
export type Grid_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Grid_Min_Fields = {
  __typename?: 'grid_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "grid" */
export type Grid_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "grid" */
export type Grid_Mutation_Response = {
  __typename?: 'grid_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Grid>;
};

/** input type for inserting object relation for remote table "grid" */
export type Grid_Obj_Rel_Insert_Input = {
  data: Grid_Insert_Input;
  on_conflict?: Maybe<Grid_On_Conflict>;
};

/** on conflict condition type for table "grid" */
export type Grid_On_Conflict = {
  constraint: Grid_Constraint;
  update_columns: Array<Grid_Update_Column>;
  where?: Maybe<Grid_Bool_Exp>;
};

/** ordering options when selecting data from "grid" */
export type Grid_Order_By = {
  created_at?: Maybe<Order_By>;
  grid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "grid" */
export type Grid_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Grid_Prepend_Input = {
  grid?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "grid" */
export enum Grid_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grid = 'grid',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "grid" */
export type Grid_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  grid?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "grid" */
export enum Grid_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grid = 'grid',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "grid" */
  delete_grid?: Maybe<Grid_Mutation_Response>;
  /** delete single row from the table: "grid" */
  delete_grid_by_pk?: Maybe<Grid>;
  /** insert data into the table: "grid" */
  insert_grid?: Maybe<Grid_Mutation_Response>;
  /** insert a single row into the table: "grid" */
  insert_grid_one?: Maybe<Grid>;
  /** update data of the table: "grid" */
  update_grid?: Maybe<Grid_Mutation_Response>;
  /** update single row of the table: "grid" */
  update_grid_by_pk?: Maybe<Grid>;
};


/** mutation root */
export type Mutation_RootDelete_GridArgs = {
  where: Grid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grid_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_GridArgs = {
  objects: Array<Grid_Insert_Input>;
  on_conflict?: Maybe<Grid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grid_OneArgs = {
  object: Grid_Insert_Input;
  on_conflict?: Maybe<Grid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GridArgs = {
  _append?: Maybe<Grid_Append_Input>;
  _delete_at_path?: Maybe<Grid_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Grid_Delete_Elem_Input>;
  _delete_key?: Maybe<Grid_Delete_Key_Input>;
  _prepend?: Maybe<Grid_Prepend_Input>;
  _set?: Maybe<Grid_Set_Input>;
  where: Grid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grid_By_PkArgs = {
  _append?: Maybe<Grid_Append_Input>;
  _delete_at_path?: Maybe<Grid_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Grid_Delete_Elem_Input>;
  _delete_key?: Maybe<Grid_Delete_Key_Input>;
  _prepend?: Maybe<Grid_Prepend_Input>;
  _set?: Maybe<Grid_Set_Input>;
  pk_columns: Grid_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "grid" */
  grid: Array<Grid>;
  /** fetch aggregated fields from the table: "grid" */
  grid_aggregate: Grid_Aggregate;
  /** fetch data from the table: "grid" using primary key columns */
  grid_by_pk?: Maybe<Grid>;
};


/** query root */
export type Query_RootGridArgs = {
  distinct_on?: Maybe<Array<Grid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grid_Order_By>>;
  where?: Maybe<Grid_Bool_Exp>;
};


/** query root */
export type Query_RootGrid_AggregateArgs = {
  distinct_on?: Maybe<Array<Grid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grid_Order_By>>;
  where?: Maybe<Grid_Bool_Exp>;
};


/** query root */
export type Query_RootGrid_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "grid" */
  grid: Array<Grid>;
  /** fetch aggregated fields from the table: "grid" */
  grid_aggregate: Grid_Aggregate;
  /** fetch data from the table: "grid" using primary key columns */
  grid_by_pk?: Maybe<Grid>;
};


/** subscription root */
export type Subscription_RootGridArgs = {
  distinct_on?: Maybe<Array<Grid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grid_Order_By>>;
  where?: Maybe<Grid_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGrid_AggregateArgs = {
  distinct_on?: Maybe<Array<Grid_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grid_Order_By>>;
  where?: Maybe<Grid_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGrid_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetGridQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetGridQuery = (
  { __typename?: 'query_root' }
  & { grid_by_pk?: Maybe<(
    { __typename?: 'grid' }
    & Pick<Grid, 'created_at' | 'grid' | 'id' | 'name' | 'owner' | 'updated_at'>
  )> }
);

export type GetExistingGridsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExistingGridsQuery = (
  { __typename?: 'query_root' }
  & { grid: Array<(
    { __typename?: 'grid' }
    & Pick<Grid, 'id' | 'name' | 'owner' | 'updated_at' | 'created_at'>
  )> }
);

export type CreateGridMutationVariables = Exact<{
  grid?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
}>;


export type CreateGridMutation = (
  { __typename?: 'mutation_root' }
  & { insert_grid_one?: Maybe<(
    { __typename?: 'grid' }
    & Pick<Grid, 'id' | 'name' | 'owner'>
  )> }
);


export const GetGridDocument = gql`
    query GetGrid($id: uuid!) {
  grid_by_pk(id: $id) {
    created_at
    grid
    id
    name
    owner
    updated_at
  }
}
    `;

/**
 * __useGetGridQuery__
 *
 * To run a query within a React component, call `useGetGridQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGridQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGridQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGridQuery(baseOptions: Apollo.QueryHookOptions<GetGridQuery, GetGridQueryVariables>) {
        return Apollo.useQuery<GetGridQuery, GetGridQueryVariables>(GetGridDocument, baseOptions);
      }
export function useGetGridLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGridQuery, GetGridQueryVariables>) {
          return Apollo.useLazyQuery<GetGridQuery, GetGridQueryVariables>(GetGridDocument, baseOptions);
        }
export type GetGridQueryHookResult = ReturnType<typeof useGetGridQuery>;
export type GetGridLazyQueryHookResult = ReturnType<typeof useGetGridLazyQuery>;
export type GetGridQueryResult = Apollo.QueryResult<GetGridQuery, GetGridQueryVariables>;
export const GetExistingGridsDocument = gql`
    query GetExistingGrids {
  grid(order_by: {updated_at: desc}) {
    id
    name
    owner
    updated_at
    created_at
  }
}
    `;

/**
 * __useGetExistingGridsQuery__
 *
 * To run a query within a React component, call `useGetExistingGridsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExistingGridsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExistingGridsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExistingGridsQuery(baseOptions?: Apollo.QueryHookOptions<GetExistingGridsQuery, GetExistingGridsQueryVariables>) {
        return Apollo.useQuery<GetExistingGridsQuery, GetExistingGridsQueryVariables>(GetExistingGridsDocument, baseOptions);
      }
export function useGetExistingGridsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExistingGridsQuery, GetExistingGridsQueryVariables>) {
          return Apollo.useLazyQuery<GetExistingGridsQuery, GetExistingGridsQueryVariables>(GetExistingGridsDocument, baseOptions);
        }
export type GetExistingGridsQueryHookResult = ReturnType<typeof useGetExistingGridsQuery>;
export type GetExistingGridsLazyQueryHookResult = ReturnType<typeof useGetExistingGridsLazyQuery>;
export type GetExistingGridsQueryResult = Apollo.QueryResult<GetExistingGridsQuery, GetExistingGridsQueryVariables>;
export const CreateGridDocument = gql`
    mutation CreateGrid($grid: jsonb = "", $name: String = "", $owner: uuid = "", $id: uuid = "") {
  insert_grid_one(
    object: {grid: $grid, name: $name, owner: $owner, id: $id}
    on_conflict: {constraint: grid_pkey, update_columns: grid}
  ) {
    id
    name
    owner
  }
}
    `;
export type CreateGridMutationFn = Apollo.MutationFunction<CreateGridMutation, CreateGridMutationVariables>;

/**
 * __useCreateGridMutation__
 *
 * To run a mutation, you first call `useCreateGridMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGridMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGridMutation, { data, loading, error }] = useCreateGridMutation({
 *   variables: {
 *      grid: // value for 'grid'
 *      name: // value for 'name'
 *      owner: // value for 'owner'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateGridMutation(baseOptions?: Apollo.MutationHookOptions<CreateGridMutation, CreateGridMutationVariables>) {
        return Apollo.useMutation<CreateGridMutation, CreateGridMutationVariables>(CreateGridDocument, baseOptions);
      }
export type CreateGridMutationHookResult = ReturnType<typeof useCreateGridMutation>;
export type CreateGridMutationResult = Apollo.MutationResult<CreateGridMutation>;
export type CreateGridMutationOptions = Apollo.BaseMutationOptions<CreateGridMutation, CreateGridMutationVariables>;