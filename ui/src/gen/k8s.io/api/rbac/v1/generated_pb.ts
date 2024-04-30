//
//Copyright The Kubernetes Authors.
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// This file was autogenerated by go-to-protobuf. Do not edit it manually!

// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file k8s.io/api/rbac/v1/generated.proto (package k8s.io.api.rbac.v1, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import { LabelSelector, ListMeta, ObjectMeta } from "../../../apimachinery/pkg/apis/meta/v1/generated_pb.js";

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 *
 * @generated from message k8s.io.api.rbac.v1.AggregationRule
 */
export class AggregationRule extends Message<AggregationRule> {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules.
   * If any of the selectors match, then the ClusterRole's permissions will be added
   * +optional
   *
   * @generated from field: repeated k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector clusterRoleSelectors = 1;
   */
  clusterRoleSelectors: LabelSelector[] = [];

  constructor(data?: PartialMessage<AggregationRule>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.AggregationRule";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "clusterRoleSelectors", kind: "message", T: LabelSelector, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregationRule {
    return new AggregationRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregationRule {
    return new AggregationRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregationRule {
    return new AggregationRule().fromJsonString(jsonString, options);
  }

  static equals(a: AggregationRule | PlainMessage<AggregationRule> | undefined, b: AggregationRule | PlainMessage<AggregationRule> | undefined): boolean {
    return proto2.util.equals(AggregationRule, a, b);
  }
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @generated from message k8s.io.api.rbac.v1.ClusterRole
 */
export class ClusterRole extends Message<ClusterRole> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
   */
  metadata?: ObjectMeta;

  /**
   * Rules holds all the PolicyRules for this ClusterRole
   * +optional
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.PolicyRule rules = 2;
   */
  rules: PolicyRule[] = [];

  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole.
   * If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be
   * stomped by the controller.
   * +optional
   *
   * @generated from field: optional k8s.io.api.rbac.v1.AggregationRule aggregationRule = 3;
   */
  aggregationRule?: AggregationRule;

  constructor(data?: PartialMessage<ClusterRole>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.ClusterRole";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ObjectMeta, opt: true },
    { no: 2, name: "rules", kind: "message", T: PolicyRule, repeated: true },
    { no: 3, name: "aggregationRule", kind: "message", T: AggregationRule, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterRole {
    return new ClusterRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterRole {
    return new ClusterRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterRole {
    return new ClusterRole().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterRole | PlainMessage<ClusterRole> | undefined, b: ClusterRole | PlainMessage<ClusterRole> | undefined): boolean {
    return proto2.util.equals(ClusterRole, a, b);
  }
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace,
 * and adds who information via Subject.
 *
 * @generated from message k8s.io.api.rbac.v1.ClusterRoleBinding
 */
export class ClusterRoleBinding extends Message<ClusterRoleBinding> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
   */
  metadata?: ObjectMeta;

  /**
   * Subjects holds references to the objects the role applies to.
   * +optional
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.Subject subjects = 2;
   */
  subjects: Subject[] = [];

  /**
   * RoleRef can only reference a ClusterRole in the global namespace.
   * If the RoleRef cannot be resolved, the Authorizer must return an error.
   * This field is immutable.
   *
   * @generated from field: optional k8s.io.api.rbac.v1.RoleRef roleRef = 3;
   */
  roleRef?: RoleRef;

  constructor(data?: PartialMessage<ClusterRoleBinding>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.ClusterRoleBinding";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ObjectMeta, opt: true },
    { no: 2, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 3, name: "roleRef", kind: "message", T: RoleRef, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterRoleBinding {
    return new ClusterRoleBinding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterRoleBinding {
    return new ClusterRoleBinding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterRoleBinding {
    return new ClusterRoleBinding().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterRoleBinding | PlainMessage<ClusterRoleBinding> | undefined, b: ClusterRoleBinding | PlainMessage<ClusterRoleBinding> | undefined): boolean {
    return proto2.util.equals(ClusterRoleBinding, a, b);
  }
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @generated from message k8s.io.api.rbac.v1.ClusterRoleBindingList
 */
export class ClusterRoleBindingList extends Message<ClusterRoleBindingList> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
   */
  metadata?: ListMeta;

  /**
   * Items is a list of ClusterRoleBindings
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.ClusterRoleBinding items = 2;
   */
  items: ClusterRoleBinding[] = [];

  constructor(data?: PartialMessage<ClusterRoleBindingList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.ClusterRoleBindingList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 2, name: "items", kind: "message", T: ClusterRoleBinding, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterRoleBindingList {
    return new ClusterRoleBindingList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterRoleBindingList {
    return new ClusterRoleBindingList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterRoleBindingList {
    return new ClusterRoleBindingList().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterRoleBindingList | PlainMessage<ClusterRoleBindingList> | undefined, b: ClusterRoleBindingList | PlainMessage<ClusterRoleBindingList> | undefined): boolean {
    return proto2.util.equals(ClusterRoleBindingList, a, b);
  }
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @generated from message k8s.io.api.rbac.v1.ClusterRoleList
 */
export class ClusterRoleList extends Message<ClusterRoleList> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
   */
  metadata?: ListMeta;

  /**
   * Items is a list of ClusterRoles
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.ClusterRole items = 2;
   */
  items: ClusterRole[] = [];

  constructor(data?: PartialMessage<ClusterRoleList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.ClusterRoleList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 2, name: "items", kind: "message", T: ClusterRole, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterRoleList {
    return new ClusterRoleList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterRoleList {
    return new ClusterRoleList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterRoleList {
    return new ClusterRoleList().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterRoleList | PlainMessage<ClusterRoleList> | undefined, b: ClusterRoleList | PlainMessage<ClusterRoleList> | undefined): boolean {
    return proto2.util.equals(ClusterRoleList, a, b);
  }
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information
 * about who the rule applies to or which namespace the rule applies to.
 *
 * @generated from message k8s.io.api.rbac.v1.PolicyRule
 */
export class PolicyRule extends Message<PolicyRule> {
  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
   *
   * @generated from field: repeated string verbs = 1;
   */
  verbs: string[] = [];

  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of
   * the enumerated resources in any API group will be allowed. "" represents the core API group and "*" represents all API groups.
   * +optional
   *
   * @generated from field: repeated string apiGroups = 2;
   */
  apiGroups: string[] = [];

  /**
   * Resources is a list of resources this rule applies to. '*' represents all resources.
   * +optional
   *
   * @generated from field: repeated string resources = 3;
   */
  resources: string[] = [];

  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   * +optional
   *
   * @generated from field: repeated string resourceNames = 4;
   */
  resourceNames: string[] = [];

  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path
   * Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding.
   * Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
   * +optional
   *
   * @generated from field: repeated string nonResourceURLs = 5;
   */
  nonResourceURLs: string[] = [];

  constructor(data?: PartialMessage<PolicyRule>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.PolicyRule";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "verbs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "apiGroups", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "resources", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "resourceNames", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "nonResourceURLs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PolicyRule {
    return new PolicyRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PolicyRule {
    return new PolicyRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PolicyRule {
    return new PolicyRule().fromJsonString(jsonString, options);
  }

  static equals(a: PolicyRule | PlainMessage<PolicyRule> | undefined, b: PolicyRule | PlainMessage<PolicyRule> | undefined): boolean {
    return proto2.util.equals(PolicyRule, a, b);
  }
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @generated from message k8s.io.api.rbac.v1.Role
 */
export class Role extends Message<Role> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
   */
  metadata?: ObjectMeta;

  /**
   * Rules holds all the PolicyRules for this Role
   * +optional
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.PolicyRule rules = 2;
   */
  rules: PolicyRule[] = [];

  constructor(data?: PartialMessage<Role>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.Role";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ObjectMeta, opt: true },
    { no: 2, name: "rules", kind: "message", T: PolicyRule, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role {
    return new Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJsonString(jsonString, options);
  }

  static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean {
    return proto2.util.equals(Role, a, b);
  }
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace.
 * It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given
 * namespace only have effect in that namespace.
 *
 * @generated from message k8s.io.api.rbac.v1.RoleBinding
 */
export class RoleBinding extends Message<RoleBinding> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
   */
  metadata?: ObjectMeta;

  /**
   * Subjects holds references to the objects the role applies to.
   * +optional
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.Subject subjects = 2;
   */
  subjects: Subject[] = [];

  /**
   * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace.
   * If the RoleRef cannot be resolved, the Authorizer must return an error.
   * This field is immutable.
   *
   * @generated from field: optional k8s.io.api.rbac.v1.RoleRef roleRef = 3;
   */
  roleRef?: RoleRef;

  constructor(data?: PartialMessage<RoleBinding>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.RoleBinding";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ObjectMeta, opt: true },
    { no: 2, name: "subjects", kind: "message", T: Subject, repeated: true },
    { no: 3, name: "roleRef", kind: "message", T: RoleRef, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleBinding {
    return new RoleBinding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleBinding {
    return new RoleBinding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleBinding {
    return new RoleBinding().fromJsonString(jsonString, options);
  }

  static equals(a: RoleBinding | PlainMessage<RoleBinding> | undefined, b: RoleBinding | PlainMessage<RoleBinding> | undefined): boolean {
    return proto2.util.equals(RoleBinding, a, b);
  }
}

/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @generated from message k8s.io.api.rbac.v1.RoleBindingList
 */
export class RoleBindingList extends Message<RoleBindingList> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
   */
  metadata?: ListMeta;

  /**
   * Items is a list of RoleBindings
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.RoleBinding items = 2;
   */
  items: RoleBinding[] = [];

  constructor(data?: PartialMessage<RoleBindingList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.RoleBindingList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 2, name: "items", kind: "message", T: RoleBinding, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleBindingList {
    return new RoleBindingList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleBindingList {
    return new RoleBindingList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleBindingList {
    return new RoleBindingList().fromJsonString(jsonString, options);
  }

  static equals(a: RoleBindingList | PlainMessage<RoleBindingList> | undefined, b: RoleBindingList | PlainMessage<RoleBindingList> | undefined): boolean {
    return proto2.util.equals(RoleBindingList, a, b);
  }
}

/**
 * RoleList is a collection of Roles
 *
 * @generated from message k8s.io.api.rbac.v1.RoleList
 */
export class RoleList extends Message<RoleList> {
  /**
   * Standard object's metadata.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
   */
  metadata?: ListMeta;

  /**
   * Items is a list of Roles
   *
   * @generated from field: repeated k8s.io.api.rbac.v1.Role items = 2;
   */
  items: Role[] = [];

  constructor(data?: PartialMessage<RoleList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.RoleList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 2, name: "items", kind: "message", T: Role, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleList {
    return new RoleList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleList {
    return new RoleList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleList {
    return new RoleList().fromJsonString(jsonString, options);
  }

  static equals(a: RoleList | PlainMessage<RoleList> | undefined, b: RoleList | PlainMessage<RoleList> | undefined): boolean {
    return proto2.util.equals(RoleList, a, b);
  }
}

/**
 * RoleRef contains information that points to the role being used
 * +structType=atomic
 *
 * @generated from message k8s.io.api.rbac.v1.RoleRef
 */
export class RoleRef extends Message<RoleRef> {
  /**
   * APIGroup is the group for the resource being referenced
   *
   * @generated from field: optional string apiGroup = 1;
   */
  apiGroup?: string;

  /**
   * Kind is the type of resource being referenced
   *
   * @generated from field: optional string kind = 2;
   */
  kind?: string;

  /**
   * Name is the name of resource being referenced
   *
   * @generated from field: optional string name = 3;
   */
  name?: string;

  constructor(data?: PartialMessage<RoleRef>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.RoleRef";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "apiGroup", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleRef {
    return new RoleRef().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleRef {
    return new RoleRef().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleRef {
    return new RoleRef().fromJsonString(jsonString, options);
  }

  static equals(a: RoleRef | PlainMessage<RoleRef> | undefined, b: RoleRef | PlainMessage<RoleRef> | undefined): boolean {
    return proto2.util.equals(RoleRef, a, b);
  }
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference,
 * or a value for non-objects such as user and group names.
 * +structType=atomic
 *
 * @generated from message k8s.io.api.rbac.v1.Subject
 */
export class Subject extends Message<Subject> {
  /**
   * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount".
   * If the Authorizer does not recognized the kind value, the Authorizer should report an error.
   *
   * @generated from field: optional string kind = 1;
   */
  kind?: string;

  /**
   * APIGroup holds the API group of the referenced subject.
   * Defaults to "" for ServiceAccount subjects.
   * Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
   * +optional
   *
   * @generated from field: optional string apiGroup = 2;
   */
  apiGroup?: string;

  /**
   * Name of the object being referenced.
   *
   * @generated from field: optional string name = 3;
   */
  name?: string;

  /**
   * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty
   * the Authorizer should report an error.
   * +optional
   *
   * @generated from field: optional string namespace = 4;
   */
  namespace?: string;

  constructor(data?: PartialMessage<Subject>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.api.rbac.v1.Subject";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "apiGroup", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Subject {
    return new Subject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Subject {
    return new Subject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Subject {
    return new Subject().fromJsonString(jsonString, options);
  }

  static equals(a: Subject | PlainMessage<Subject> | undefined, b: Subject | PlainMessage<Subject> | undefined): boolean {
    return proto2.util.equals(Subject, a, b);
  }
}

