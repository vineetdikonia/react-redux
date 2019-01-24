import React from "react";
const Header = () => (
    <header id="m_header" className="m-grid__item    m-header " m-minimize-offset="200" m-minimize-mobile-offset="200">
        <div className="m-container m-container--fluid m-container--full-height">
            <div className="m-stack m-stack--ver m-stack--desktop">
                <div className="m-stack__item m-brand  m-brand--skin-dark ">
                    <div className="m-stack m-stack--ver m-stack--general">
                        <div className="m-stack__item m-stack__item--middle m-brand__logo">
                            <a href="index.html" className="m-brand__logo-wrapper">
                                <img alt="" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/logo_new.jpg" />
                            </a>
                        </div>
                        <div className="m-stack__item m-stack__item--middle m-brand__tools">
                            <a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  ">
                                <span></span>
                            </a>
                            <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </a>
                            <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </a>
                            <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                <i className="flaticon-more"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                    <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
                    <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                        <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
                            <div className="m-stack__item m-topbar__nav-wrapper">
                                <ul className="m-topbar__nav m-nav m-nav--inline">
                                    <li className="m-nav__item m-topbar__notifications m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click" m-dropdown-persistent="1">
                                        <a href="#" className="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                                            <span className="m-nav__link-icon">
                                                <span className="m-nav__link-icon-wrapper"><i className="flaticon-alarm"></i></span>
                                                <span className="m-nav__link-badge m-badge m-badge--danger">3</span>
                                            </span>
                                        </a>
                                        <div className="m-dropdown__wrapper">
                                            <span className="m-dropdown__arrow m-dropdown__arrow--center"></span>
                                            <div className="m-dropdown__inner">
                                                <div className="m-dropdown__header m--align-center">
                                                    <span className="m-dropdown__header-title">9 New</span>
                                                    <span className="m-dropdown__header-subtitle">User Notifications</span>
                                                </div>
                                                <div className="m-dropdown__body">
                                                    <div className="m-dropdown__content">
                                                        <ul className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                                                            <li className="nav-item m-tabs__item">
                                                                <a className="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
                                                                    Alerts
	                                          </a>
                                                            </li>
                                                            <li className="nav-item m-tabs__item">
                                                                <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">Events</a>
                                                            </li>
                                                            <li className="nav-item m-tabs__item">
                                                                <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">Logs</a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                                                                <div className="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                                                    <div className="m-list-timeline m-list-timeline--skin-light">
                                                                        <div className="m-list-timeline__items">
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge -m-list-timeline__badge--state-success"></span>
                                                                                <span className="m-list-timeline__text">12 new users registered</span>
                                                                                <span className="m-list-timeline__time">Just now</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">System shutdown <span className="m-badge m-badge--success m-badge--wide">pending</span></span>
                                                                                <span className="m-list-timeline__time">14 mins</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">New invoice received</span>
                                                                                <span className="m-list-timeline__time">20 mins</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">DB overloaded 80% <span className="m-badge m-badge--info m-badge--wide">settled</span></span>
                                                                                <span className="m-list-timeline__time">1 hr</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">System error - <a href="#" className="m-link">Check</a></span>
                                                                                <span className="m-list-timeline__time">2 hrs</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item m-list-timeline__item--read">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span href="" className="m-list-timeline__text">New order received <span className="m-badge m-badge--danger m-badge--wide">urgent</span></span>
                                                                                <span className="m-list-timeline__time">7 hrs</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item m-list-timeline__item--read">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">Production server down</span>
                                                                                <span className="m-list-timeline__time">3 hrs</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge"></span>
                                                                                <span className="m-list-timeline__text">Production server up</span>
                                                                                <span className="m-list-timeline__time">5 hrs</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                                                <div className="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                                                    <div className="m-list-timeline m-list-timeline--skin-light">
                                                                        <div className="m-list-timeline__items">
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
                                                                                <a href="" className="m-list-timeline__text">New order received</a>
                                                                                <span className="m-list-timeline__time">Just now</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-danger"></span>
                                                                                <a href="" className="m-list-timeline__text">New invoice received</a>
                                                                                <span className="m-list-timeline__time">20 mins</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
                                                                                <a href="" className="m-list-timeline__text">Production server up</a>
                                                                                <span className="m-list-timeline__time">5 hrs</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                                                                                <a href="" className="m-list-timeline__text">New order received</a>
                                                                                <span className="m-list-timeline__time">7 hrs</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                                                                                <a href="" className="m-list-timeline__text">System shutdown</a>
                                                                                <span className="m-list-timeline__time">11 mins</span>
                                                                            </div>
                                                                            <div className="m-list-timeline__item">
                                                                                <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                                                                                <a href="" className="m-list-timeline__text">Production server down</a>
                                                                                <span className="m-list-timeline__time">3 hrs</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                                                <div className="m-stack m-stack--ver m-stack--general" style={{ 'minHeight': '180px' }}>
                                                                    <div className="m-stack__item m-stack__item--center m-stack__item--middle">
                                                                        <span className="">All caught up!No new logs.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-nav__item m-topbar__quick-actions m-dropdown m-dropdown--skin-light m-dropdown--large m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                                        <a href="#" className="m-nav__link m-dropdown__toggle">
                                            <span className="m-nav__link-icon">
                                                <span className="m-nav__link-icon-wrapper"><i className="flaticon-share"></i></span>
                                                <span className="m-nav__link-badge m-badge m-badge--accent">5</span>
                                            </span>
                                        </a>
                                        <div className="m-dropdown__wrapper">
                                            <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                            <div className="m-dropdown__inner">
                                                <div className="m-dropdown__header m--align-center">
                                                    <span className="m-dropdown__header-title">Quick Actions</span>
                                                    <span className="m-dropdown__header-subtitle">Shortcuts</span>
                                                </div>
                                                <div className="m-dropdown__body m-dropdown__body--paddingless">
                                                    <div className="m-dropdown__content">
                                                        <div className="m-scrollable" data-scrollable="false" data-height="380" data-mobile-height="200">
                                                            <div className="m-nav-grid m-nav-grid--skin-light">
                                                                <div className="m-nav-grid__row">
                                                                    <a href="#" className="m-nav-grid__item">
                                                                        <i className="m-nav-grid__icon flaticon-file"></i>
                                                                        <span className="m-nav-grid__text">Generate Report</span>
                                                                    </a>
                                                                    <a href="#" className="m-nav-grid__item">
                                                                        <i className="m-nav-grid__icon flaticon-time"></i>
                                                                        <span className="m-nav-grid__text">Add New Event</span>
                                                                    </a>
                                                                </div>
                                                                <div className="m-nav-grid__row">
                                                                    <a href="#" className="m-nav-grid__item">
                                                                        <i className="m-nav-grid__icon flaticon-folder"></i>
                                                                        <span className="m-nav-grid__text">Create New Task</span>
                                                                    </a>
                                                                    <a href="#" className="m-nav-grid__item">
                                                                        <i className="m-nav-grid__icon flaticon-clipboard"></i>
                                                                        <span className="m-nav-grid__text">Completed Tasks</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-nav__item m-topbar__languages m-dropdown m-dropdown--small m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--mobile-full-width language-select language-select" m-dropdown-toggle="click">
                                        <a href="#" className="m-nav__link m-dropdown__toggle">
                                            <span className="m-nav__link-text">
                                                <img className="m-topbar__language-selected-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/020-flag.svg" />
                                            </span>
                                        </a>
                                        <div className="m-dropdown__wrapper">
                                            <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                            <div className="m-dropdown__inner">
                                                <div className="m-dropdown__header m--align-center" style={{ 'backgroundImage': `url(https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/quick_actions_bg.jpg)`, 'backgroundSize': 'cover' }}>
                                                    <span className="m-dropdown__header-subtitle">Select your language</span>
                                                </div>
                                                <div className="m-dropdown__body">
                                                    <div className="m-dropdown__content">
                                                        <ul className="m-nav m-nav--skin-light">
                                                            <li className="m-nav__item m-nav__item--active">
                                                                <a href="#" className="m-nav__link m-nav__link--active">
                                                                    <span className="m-nav__link-icon"><img className="m-topbar__language-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/020-flag.svg" /></span>
                                                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">USA</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="#" className="m-nav__link">
                                                                    <span className="m-nav__link-icon"><img className="m-topbar__language-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/015-china.svg" /></span>
                                                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">China</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="#" className="m-nav__link">
                                                                    <span className="m-nav__link-icon"><img className="m-topbar__language-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/016-spain.svg" /></span>
                                                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Spain</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="#" className="m-nav__link">
                                                                    <span className="m-nav__link-icon"><img className="m-topbar__language-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/014-japan.svg" /></span>
                                                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Japan</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="#" className="m-nav__link">
                                                                    <span className="m-nav__link-icon"><img className="m-topbar__language-img" src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/017-germany.svg" /></span>
                                                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Germany</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                                        <a href="#" className="m-nav__link m-dropdown__toggle">
                                            <span className="m-topbar__userpic">
                                                <img src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/user4.jpg" className="m--img-rounded m--marginless m--img-centered" alt="" />
                                            </span>
                                            <span className="m-nav__link-icon m-topbar__usericon  m--hide">
                                                <span className="m-nav__link-icon-wrapper"><i className="flaticon-user-ok"></i></span>
                                            </span>
                                            <span className="m-topbar__username m--hide">Nick</span>
                                        </a>
                                        <div className="m-dropdown__wrapper">
                                            <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                            <div className="m-dropdown__inner">
                                                <div className="m-dropdown__header m--align-center">
                                                    <div className="m-card-user m-card-user--skin-light">
                                                        <div className="m-card-user__pic">
                                                            <img src="https://s3.us-east-2.amazonaws.com/caterpillarcdn-production/test/user4.jpg" className="m--img-rounded m--marginless" alt="" />
                                                        </div>
                                                        <div className="m-card-user__details">
                                                            <span className="m-card-user__name m--font-weight-500">Mark Andre</span>
                                                            <a href="" className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="m-dropdown__body">
                                                    <div className="m-dropdown__content">
                                                        <ul className="m-nav m-nav--skin-light">
                                                            <li className="m-nav__section m--hide">
                                                                <span className="m-nav__section-text">Section</span>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="profile.html" className="m-nav__link">
                                                                    <i className="m-nav__link-icon flaticon-profile-1"></i>
                                                                    <span className="m-nav__link-title">
                                                                        <span className="m-nav__link-wrap">
                                                                            <span className="m-nav__link-text">My Profile</span>
                                                                            <span className="m-nav__link-badge"><span className="m-badge m-badge--success">2</span></span>
                                                                        </span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="profile.html" className="m-nav__link">
                                                                    <i className="m-nav__link-icon flaticon-share"></i>
                                                                    <span className="m-nav__link-text">Activity</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="profile.html" className="m-nav__link">
                                                                    <i className="m-nav__link-icon flaticon-chat-1"></i>
                                                                    <span className="m-nav__link-text">Messages</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__separator m-nav__separator--fit">
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="profile.html" className="m-nav__link">
                                                                    <i className="m-nav__link-icon flaticon-info"></i>
                                                                    <span className="m-nav__link-text">FAQ</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="profile.html" className="m-nav__link">
                                                                    <i className="m-nav__link-icon flaticon-lifebuoy"></i>
                                                                    <span className="m-nav__link-text">Support</span>
                                                                </a>
                                                            </li>
                                                            <li className="m-nav__separator m-nav__separator--fit">
                                                            </li>
                                                            <li className="m-nav__item">
                                                                <a href="snippets/pages/user/login-1.html" className="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;