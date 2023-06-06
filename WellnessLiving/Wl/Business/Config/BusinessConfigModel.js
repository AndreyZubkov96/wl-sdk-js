/**
 * Manages business configurations for clients, bookings, payments, and related things.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Config_BusinessConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * All business policies connected to clients and bookings.
   *
   * <dl>
   *   <dt>int <var>a_wait_service</var></dt>
   *   <dd>The keys are listed as IDs from {@link WlServiceSid}, and values are flags outlining whether wait listing is allowed.</dd>
   *   <dt>int <var>i_book_before</var></dt>
   *   <dd>The minimum hours|days|months before a class can be booked.</dd>
   *   <dt>int <var>i_book_future</var></dt>
   *   <dd>The maximum hours|days|months after a class can be booked.</dd>
   *   <dt>int <var>i_cancel</var></dt>
   *   <dd>The minimum hours|days|months before a class can be canceled without penalty.</dd>
   *   <dt>int <var>i_promote</var></dt>
   *   <dd>The minimum hours|days|months before a class can be promoted from a wait list.</dd>
   *   <dt>int <var>i_reattempt_count</var></dt>
   *   <dd>The number of failed auto-payment reattempts.</dd>
   *   <dt>int <var>id_book_before</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_book_future</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_cancel</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_promote</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>bool <var>is_book_inside_active_pay_period</var></dt>
   *   <dd>if `true` - clients with Purchase Options are only allowed
   *     to book sessions within their current paid period, `false` - during Purchase Option's duration.</dd>
   *   <dt>int <var>is_disable_promotion</var></dt>
   *   <dd>1 if a client's automatic payment fails, their account should not be
   *     debited and their Purchase Option becomes inactive, 0 - otherwise. Default 0.</dd>
   *   <dt>bool <var>is_enable_payment_penalty</var></dt>
   *   <dd>Determines whether to charge a penalty after the final auto-payment attempt.</dd>
   *   <dt>bool <var>is_enable_payment_reattempt</var></dt>
   *   <dd>Determines whether to reattempt failed auto-payments.</dd>
   *   <dt>bool <var>is_enable_staff_ip_restriction</var></dt>
   *   <dd>Determines whether to restrict which IP addresses staff can login from.</dd>
   *   <dt>int <var>is_prevent_booking</var></dt>
   *   <dd>1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0.</dd>
   *   <dt>bool <var>is_staff_restrict</var></dt>
   *   <dd>If true, clients can't choose a provider in the appointment wizard.</dd>
   *   <dt>bool <var>is_wait</var></dt>
   *   <dd>Enable\disable wait list.</dd>
   *   <dt>int <var>k_currency</var></dt>
   *   <dd>The currency from rs.currency table.</dd>
   *   <dt>int <var>k_timezone</var></dt>
   *   <dd>The timezone from get.timezone table.</dd>
   *   <dt>string <var>m_payment_penalty</var></dt>
   *   <dd>The penalty amount to charge after the final auto-payment attempt.</dd>
   *   <dt>string <var>url_custom</var></dt>
   *   <dd>Custom URL from Business URLs.</dd>
   * </dl>
   *
   * @get result
   * @type {{}}
   */
  this.a_business_policy = undefined;

  /**
   * Determines whether staff members should select a location at checkout.
   *
   * `true` - staff members should select a location at checkout, `false` - otherwise.
   *
   * @get result
   * @var {boolean}
   */
  this.is_location_select = undefined;

  /**
   * Key of business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Config_BusinessConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Config_BusinessConfigModel.prototype.config=function()
{
  return {"a_field": {"a_business_policy": {"get": {"result": true}},"is_location_select": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Config_BusinessConfigModel.instanceGet
 * @param {string} k_business Key of business.
 * @returns {Wl_Business_Config_BusinessConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */