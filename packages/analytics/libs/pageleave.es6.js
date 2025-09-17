let sdkversion_placeholder = '1.27.11'
function wrapPluginInitFn(e, t, a) {
  if ((t && (e.plugin_name = t), a && e.init)) {
    let i = e.init
    e.init = function (r, n) {
      if (
        (wrapLogFn(r, e, t), (r.readyState && r.readyState.state >= 3) || !r.on)
      )
        return s()
      function s() {
        i.call(e, r, n)
      }
      r.on(a, s)
    }
  }
  return e
}
function wrapLogFn(e, t, a) {
  function i(t, i) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, i)
          .module(`${a}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, i)
  }
  ((t.log = function () {
    i('log', arguments)
  }),
  (t.warn = function () {
    i('warn', arguments)
  }),
  (t.error = function () {
    i('error', arguments)
  }))
}
function createPlugin(e, t, a) {
  return (
    wrapPluginInitFn(e, t, a),
    (e.plugin_version = sdkversion_placeholder),
    e
  )
}
let page_hidden_status_refresh_time = 5e3
let MAX_DURATION = 432e3
function PageLeave() {
  ((this.sd = null),
  (this.start_time = +new Date()),
  (this.page_show_status = !0),
  (this.page_hidden_status = !1),
  (this._ = {}),
  (this.timer = null),
  (this.current_page_url = document.referrer),
  (this.url = location.href),
  (this.title = document.title || ''),
  (this.option = {}),
  (this.heartbeat_interval_time = 5e3),
  (this.heartbeat_interval_timer = null),
  (this.page_id = null),
  (this.storage_name = 'sawebjssdkpageleave'),
  (this.max_duration = MAX_DURATION))
}
((PageLeave.prototype.init = function (e, t) {
  if (e) {
    console.log(8888)
    if (((this.sd = e), (this._ = this.sd._), t)) {
      this.option = t
      let a = t.heartbeat_interval_time
      a
      && (this._.isNumber(a) || this._.isNumber(1 * a))
      && 1 * a > 0
      && (this.heartbeat_interval_time = 1e3 * a)
      let i = t.max_duration
      i
      && (this._.isNumber(i) || this._.isNumber(1 * i))
      && 1 * i > 0
      && (this.max_duration = i)
    }
    ((this.page_id = Number(
      String(this._.getRandom()).slice(2, 5)
      + String(this._.getRandom()).slice(2, 4)
      + String(new Date().getTime()).slice(-4),
    )),
    this.addEventListener(),
    !0 === document.hidden
      ? (this.page_show_status = !1)
      : this.addHeartBeatInterval(),
    this.log('PageLeave\u521D\u59CB\u5316\u5B8C\u6BD5'))
  }
  else {
    this.log('\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165')
  }
}),
(PageLeave.prototype.log = function (e) {
  this.sd && this.sd.log(e)
}),
(PageLeave.prototype.refreshPageEndTimer = function () {
  let e = this;
  (this.timer && (clearTimeout(this.timer), (this.timer = null)),
  (this.timer = setTimeout(() => {
    e.page_hidden_status = !1
  }, page_hidden_status_refresh_time)))
}),
(PageLeave.prototype.hiddenStatusHandler = function () {
  (clearTimeout(this.timer),
  (this.timer = null),
  (this.page_hidden_status = !1))
}),
(PageLeave.prototype.pageStartHandler = function () {
  let e = this.getPageLeaveProperties();
  ((this.start_time = +new Date()),
  !0 == !document.hidden
    ? (this.page_show_status = !0)
    : (this.page_show_status = !1),
  (this.url = location.href),
  this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_view, Object.assign(e, this.option.urlPropertyMap(this.url))),
  (this.title = document.title))
}),
(PageLeave.prototype.pageEndHandler = function () {
  if (!0 !== this.page_hidden_status) {
    let e = this.getPageLeaveProperties();
    (!1 === this.page_show_status && delete e[this.option.event_duration],
    (this.page_show_status = !1),
    (this.page_hidden_status = !0),
    this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_leave, Object.assign(e, this.option.urlPropertyMap(this.url))),
    this.refreshPageEndTimer(),
    this.delHeartBeatData())
  }
}),
(PageLeave.prototype.addEventListener = function () {
  (this.addPageStartListener(),
  this.addPageSwitchListener(),
  this.addSinglePageListener(),
  this.addPageEndListener())
}),
(PageLeave.prototype.addPageStartListener = function () {
  let e = this
  'onpageshow' in window
  && this._.addEvent(window, 'pageshow', () => {
    (e.pageStartHandler(), e.hiddenStatusHandler())
  })
}),
(PageLeave.prototype.isCollectUrl = function (e) {
  return (
    typeof this.option.isCollectUrl != 'function'
    || typeof e != 'string'
    || e === ''
    || this.option.isCollectUrl(e)
  )
}),
(PageLeave.prototype.addSinglePageListener = function () {
  let e = this
  this.sd.ee
  && this.sd.ee.spa.prepend('switch', (t) => {
    t !== location.href
    && ((e.url = t),
    e.pageEndHandler(),
    e.stopHeartBeatInterval(),
    (e.current_page_url = e.url),
    e.pageStartHandler(),
    e.hiddenStatusHandler(),
    e.addHeartBeatInterval())
  })
}),
(PageLeave.prototype.addPageEndListener = function () {
  let e = this
  this._.each(['pagehide', 'beforeunload', 'unload'], (t) => {
    `on${t}` in window
    && e._.addEvent(window, t, () => {
      (e.pageEndHandler(), e.stopHeartBeatInterval())
    })
  })
}),
(PageLeave.prototype.addPageSwitchListener = function () {
  let e = this
  this._.listenPageState({
    visible() {
      (e.pageStartHandler(),
      e.hiddenStatusHandler(),
      e.addHeartBeatInterval())
    },
    hidden() {
      ((e.url = location.href),
      (e.title = document.title),
      e.pageEndHandler(),
      e.stopHeartBeatInterval())
    },
  })
}),
(PageLeave.prototype.addHeartBeatInterval = function () {
  this._.localStorage.isSupport() && this.startHeartBeatInterval()
}),
(PageLeave.prototype.startHeartBeatInterval = function () {
  let e = this
  this.heartbeat_interval_timer && this.stopHeartBeatInterval()
  let t = !0;
  (this.isCollectUrl(this.url) || (t = !1),
  (this.heartbeat_interval_timer = setInterval(() => {
    t && e.saveHeartBeatData()
  }, this.heartbeat_interval_time)),
  t && this.saveHeartBeatData('is_first_heartbeat'),
  this.reissueHeartBeatData())
}),
(PageLeave.prototype.stopHeartBeatInterval = function () {
  (clearInterval(this.heartbeat_interval_timer),
  (this.heartbeat_interval_timer = null))
}),
(PageLeave.prototype.saveHeartBeatData = function (e) {
  let t = this.getPageLeaveProperties()
  let a = new Date();
  ((t.$time = a), e === 'is_first_heartbeat' && (t[this.option.event_duration] = 3.14))
  let i = this.sd.kit.buildData({
    type: 'track',
    event: this.option.event_name_leave,
    properties: t,
  });
  ((i.heartbeat_interval_time = this.heartbeat_interval_time),
  this.sd.store.saveObjectVal(`${this.storage_name}-${this.page_id}`, i))
}),
(PageLeave.prototype.delHeartBeatData = function (e) {
  this._.localStorage.isSupport()
  && this._.localStorage.remove(e || `${this.storage_name}-${this.page_id}`)
}),
(PageLeave.prototype.reissueHeartBeatData = function () {
  for (let e = window.localStorage.length - 1; e >= 0; e--) {
    let t = window.localStorage.key(e)
    if (
      t
      && t !== `${this.storage_name}-${this.page_id}`
      && t.indexOf(`${this.storage_name}-`) === 0
    ) {
      let a = this.sd.store.readObjectVal(t)
      this._.isObject(a)
      && 1 * new Date() - a.time > a.heartbeat_interval_time + 5e3
      && (delete a.heartbeat_interval_time,
      (a._flush_time = new Date().getTime()),
      this.sd.kit.sendData(a),
      this.delHeartBeatData(t))
    }
  }
}),
(PageLeave.prototype.getPageLeaveProperties = function () {
  let e = (+new Date() - this.start_time) / 1e3;
  ((isNaN(e) || e < 0 || e > this.max_duration) && (e = 0),
  (e = Number(e.toFixed(3))))
  let t = this._.getReferrer(this.current_page_url)
  let a
    = (document.documentElement && document.documentElement.scrollTop)
      || window.pageYOffset
      || (document.body && document.body.scrollTop)
      || 0
  a = Math.round(a) || 0
  let i = {
    $title: this.title,
    $url: this._.getURL(this.url),
    $url_path: this._.getURLPath(this._.URL(this.url).pathname),
    $referrer_host: t ? this._.getHostname(t) : '',
    $referrer: t,
    $viewport_position: a,
  }
  return (
    e !== 0 && (i[this.option.event_duration] = e),
    (i = this._.extend(i, this.option.custom_props))
  )
}))
let pageLeave = new PageLeave()
let index = createPlugin(pageLeave, 'PageLeave', 'sdkReady')
export default index
