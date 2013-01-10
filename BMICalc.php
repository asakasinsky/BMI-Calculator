<?php

/* 
Plugin Name: BMICalc Plugin 
Plugin URI:
Description: Body mass index calculator. 
Author: Vasily Asakasinsky 
Version: 1.2.2
Author URI: https://github.com/asakasinsky
*/  


if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

define('BMICALC_VERSION', '1.2.2');

function BMICalc($args) {

    extract($args);
    
    echo $before_widget; 
    echo $before_title;
    echo get_option('bmi_calc_title');  
    echo $after_title; 
    echo render_widget('sidebar');
    echo $after_widget; 

}

function bmi_calc_config() {
    if (!empty($_REQUEST['bmi_calc_title'])) {
        update_option('bmi_calc_title', $_REQUEST['bmi_calc_title']);
    }
    echo 'Заголовок&nbsp;:&nbsp;<input type="text" name="bmi_calc_title" value="'. get_option('bmi_calc_title') .'"/>';
}

function render_widget($widget_place=''){
    $templateFile = dirname( __FILE__ ) . '/widget.php';
        if(file_exists($templateFile)){
            ob_start();
            include $templateFile;
            return ob_get_clean();   
        }
    }

function register_bmi_calc() {
    register_sidebar_widget('BMI calculator', 'BMICalc');
    register_widget_control('BMI calculator', 'bmi_calc_config' );
}

add_shortcode ('bmi_calc', 'render_widget');
add_action('init', 'register_bmi_calc');