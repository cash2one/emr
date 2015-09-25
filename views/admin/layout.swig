{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
<link rel="stylesheet" type="text/css" href="{{ path.style }}/admin.css"/>
{%- endblock %}

{% block javascripts %}
<script type="text/javascript" src="{{ path.script }}/admin.js"></script>
{% endblock %}