{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
<link rel="stylesheet" type="text/css" href="{{ path.style }}/bootstrap-datetimepicker.css"/>
<link rel="stylesheet" type="text/css" href="{{ path.style }}/patient.css"/>
{%- endblock %}

{% block javascripts %}
<script type="text/javascript" src="{{ path.script }}/bootstrap-datetimepicker.js"></script>
<script type="text/javascript" src="{{ path.script }}/bootstrap-datetimepicker.zh-CN.js"></script>
<script type="text/javascript" src="{{ path.script }}/patient.js"></script>
{% endblock %}