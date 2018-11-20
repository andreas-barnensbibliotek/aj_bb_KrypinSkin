<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%--<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>--%>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%--<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>--%>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%--<%@ Register TagPrefix="dnn" TagName="Meta" Src="~/Admin/Skins/Meta.ascx" %>--%>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" Src="~/admin/Skins/JavaScriptLibraryInclude.ascx" %>
<dnn:DnnJsInclude runat="server" FilePath="~/Resources/Shared/Scripts/jquery/jquery-ui.min.js" />

<fortyfingers:STYLEHELPER ID="MainCSS"  AddCssFile="layout/styles/main.css" runat="server" />
<fortyfingers:STYLEHELPER ID="STYLEHELPER3" AddToHead='<meta charset="UTF-8">' runat="server" />
<fortyfingers:STYLEHELPER ID="headMeta1" AddToHead='<meta http-equiv="X-UA-Compatible" content="IE=edge">' runat="server" />
<fortyfingers:STYLEHELPER ID="headMeta2" AddToHead='<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">' runat="server" />
<fortyfingers:STYLEHELPER ID="headreferrer" AddToHead='<meta name="referrer" content="origin">' runat="server" />

<fortyfingers:STYLEHELPER ID="mediaqueriesCSS" AddCssFile="layout/styles/mediaqueries.css" runat="server" />
<fortyfingers:STYLEHELPER ID="STYLEHELPER1" AddCssFile="layout/styles/slicknav.css" runat="server" />

<fortyfingers:STYLEHELPER ID="STYLEHELPER4"  AddJsFile="layout/scripts/jquery.cookiesdirective.js" runat="server" />
<fortyfingers:STYLEHELPER ID="SHGLEE9" IfBrowser="IE<9" AddCssFile="layout/styles/ie/ie8.css" AddJsFile="layout/scripts/ie/html5shiv.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="SHGLEE9_2" IfBrowser="IE<9"   AddJsFile="layout/scripts/ie/css3-mediaqueries.min.js" runat="server" />
test
<div id="maincontainer" class="aj_bb_KrypinMainContainer">
    <div class="wrapper row1">
        <div id="logon" class="headerleftcol">
             <img id="logoimg" src= "images/bblogo2.png" runat="server" />        
        </div>
        <div id="topboxheader" class="headermaincol">
           
            <span id="topheader">
                
                 <span id="HeaderPane" runat="server"></span>
               
            </span>
            <div>&nbsp;</div>           
        </div>    
        <div class="headerrightcol">
            <div id="logginBlock">
            <a id="lyssarealspeakercont" href="" title="Lyssna på sidan"> <img id="lyssarealspeaker" class="lyssnarealspeaker" src= "images/lyssnaRealspeaker.png" runat="server" /></a>
              <dnn:USER ID="USER1" CssClass="userbox" runat="server" Text="Bli medlem" LegacyMode="false" />
              <dnn:LOGIN ID="LOGIN2" CssClass="loginbox" runat="server" Text="Logga in" LegacyMode="false" />
              <span id="searchboxen">
              <dnn:SEARCH runat="server" id="dnnSEARCH" CssClass="ServerSkinWidget" UseDropDownList="true" Submit="<img src=/Portals/0/Skins/nydesigntest/images/zoom.png border=&quot;0&quot; alt=&quot;Search&quot; /&gt;" />
              </span> 
              
            </div>
        </div>                  
                      
        <div>&nbsp;</div>
        
    </div>
<!-- ################################################################################################ -->
    <div class="wrapper row2">

      <nav id="topnav">
        <div id="flexmenubox" >  </div>  
        <div id="menyn" class="containermargins clear">
            <dnn:MENU ID="MENU1" MenuStyle="Simple" runat="Server"/>
        </div>  
      </nav>
        
    </div>
<!-- content -->
   <div id="aj_bb_KrypinSkin"  class="wrapper row3 aj_bb_KrypinSkin" >
        <!-- flexGrid START -->
        <div class="aj_bb_KrypinMainGrid Grid--gutters Grid--1of12">
            
            <!-- krypinMeny START -->
            <div class="Grid-cell fill-area">
                <div id="krypinMenyPane" runat="server"></div>
            </div>            
            <!-- krypinMeny END -->
            
            <!-- Krypin Content START -->
            <div class="Grid-cell">
                <div id="contentPane" runat="server"></div>
            </div>
            <!-- Krypin Content END -->

        </div>
        <!-- flexGrid END -->
    </div>

    <!-- Footer -->
    <div class="wrapper row2">
      <div class="clear" id="footer">
           <div class="containermargins">
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                     <div id="foterpane_1_4Pane" ><span id="foterPane_1_4" runat="server"></span>
                         </div>
                
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_2_4Pane" ><span id="foterPane_2_4" runat="server"></span></div>
               
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_3_4Pane" ><span id="foterPane_3_4" runat="server"></span></div>
                
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_4_4Pane" ><span id="foterPane_4_4" runat="server"></span></div>                
                    <!--&nbsp;-->
                </div>
                <div id="footikonimg"><img id="Img1" src="images/footerlogo.png" runat="server" /> </div>
            </div>
      </div>
     </div>   
    
</div>

<div id="licbox" class="wrapper row4">
  <div id="copyright" class="clear">
    <p class="fl_left">&copy; <a href="/Hem/Regler/tabid/865/Default.aspx">L&aring;na av oss</a> - <a href="#">barnensbibliotek.se</a></p>
    <p class="fl_right">        
        
    </p>
  
  </div>
</div>
<!-- AJSHAREBOX WIDGET -->
<%--<fortyfingers:STYLEHELPER ID="bokemonJS"  AddJsFile="../../../../DesktopModules/barnensbiblService/bokemonApi/js/backup/bokemonUser.js" runat="server" />--%>

<fortyfingers:STYLEHELPER ID="AJShareboxCss" AddCssFile="../../../../DesktopModules/ajSharebox/ajSharebox.css" runat="server" />
<fortyfingers:STYLEHELPER ID="AJShareboxJs"  AddJsFile="../../../../DesktopModules/ajSharebox/ajSharebox.js" runat="server" />
<div class="Ajshare_box">
    <ul></ul>
</div>
<div id="ReadspeakerBox">
    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Lyssna p&aring; sidans text med ReadSpeaker" href="http://app.eu.readspeaker.com/cgi-bin/rsent?customerid=4430&amp;lang=sv_se&amp;readid=itemheight1bgrgb_ljusgra">
            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Lyssna</span></span></span>
            <span class="rsbtn_right rsimg rsplay rspart"></span>
        </a>
    </div>
</div>
<span id="barnensbiblCurrentUserid"><%= UserController.Instance.GetCurrentUserInfo().UserID%></span>
<fortyfingers:STYLEHELPER ID="tinymce" AddJsFile="public/js/tinymce/tinymce.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="scriptmobile" AddJsFile="layout/scripts/jquery.slicknav.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="addcustomjs" AddJsFile="layout/scripts/custom.js" runat="server" />

<fortyfingers:STYLEHELPER ID="krypinbundlejs" AddJsFile="public/js/aj_bb_Krypinbundle.4.0.0.js" runat="server" />
