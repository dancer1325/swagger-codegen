/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The HasOnlyReadOnly model module.
 * @module model/HasOnlyReadOnly
 * @version 1.0.0
 */
export class HasOnlyReadOnly {
  /**
   * Constructs a new <code>HasOnlyReadOnly</code>.
   * @alias module:model/HasOnlyReadOnly
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HasOnlyReadOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HasOnlyReadOnly} obj Optional instance to populate.
   * @return {module:model/HasOnlyReadOnly} The populated <code>HasOnlyReadOnly</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HasOnlyReadOnly();
      if (data.hasOwnProperty('bar'))
        obj.bar = ApiClient.convertToType(data['bar'], 'String');
      if (data.hasOwnProperty('foo'))
        obj.foo = ApiClient.convertToType(data['foo'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} bar
 */
HasOnlyReadOnly.prototype.bar = undefined;

/**
 * @member {String} foo
 */
HasOnlyReadOnly.prototype.foo = undefined;


