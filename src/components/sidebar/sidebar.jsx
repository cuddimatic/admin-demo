import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../assets/scss/all/custom/CustomStyles.scss'

const Sidebar = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
    /*--------------------------------------------------------------------------------*/
    const expandLogo = () => {
        document.getElementById("logobg").classList.toggle("expand-logo");
    }
    /*--------------------------------------------------------------------------------*/
    /*Verifies if routeName is the one active (in browser input)                      */
    /*--------------------------------------------------------------------------------*/

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    return (
        <aside className="left-sidebar custom-sidebar" id="sidebarbg" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
            <div className="scroll-sidebar">
                <PerfectScrollbar className="sidebar-nav">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Sidebar Menus will go here                                                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <p className="main-title">Main pages</p>
                    <Nav id="sidebarnav">
                        {props.routes.map((prop, key) => {
                            if(prop.show_if_ana) {
                                return (
                                    <p className="main-title" key={key}>General</p>
                                )
                            }
                            if (prop.redirect) {
                                return null;
                            }
                            else {
                                return (
                                    <li className={activeRoute(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item'} key={key}>
                                        <NavLink to={prop.path} className="sidebar-link" activeClassName="active">
                                            <i className={prop.icon} />
                                            <span className="hide-menu">{prop.name}</span>
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                    </Nav>
                </PerfectScrollbar>
            </div>
        </aside>
    );
}
export default Sidebar;