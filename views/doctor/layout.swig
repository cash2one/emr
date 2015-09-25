{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
<link rel="stylesheet" type="text/css" href="{{ path.style }}/doctor.css"/>
{%- endblock %}

{% block javascripts %}
<script type="text/javascript" src="{{ path.script }}/doctor.js"></script>
<script type="text/javascript" src="{{ path.script }}/insert.js"></script>
{% endblock %}