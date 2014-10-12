var MarkdownEditor=function(e){e=e||{},MarkdownEditor.superclass.constructor.call(this,e)};Ext.override(MODx.panel.Resource,{}),Ext.extend(MarkdownEditor,Ext.Component,{initComponent:function(){MarkdownEditor.superclass.initComponent.call(this),Ext.onReady(this.render,this)},buildUI:function(){this.textarea.setDisplayed("none"),this.textarea.setWidth(0),this.textarea.setHeight(0);var e=Ext.DomHelper.insertBefore(this.textarea,{tag:"div","class":"markdown-container"});Ext.DomHelper.append(e,{tag:"div",id:"content-md","class":this.textarea.dom.className}),Ext.DomHelper.append(e,{tag:"div",id:"preview-md","class":"markdown-body"}),Ext.DomHelper.append(e,{tag:"div",id:"toolbox",cn:[{tag:"span",id:"preview-button",html:'<i class="icon icon-toggle-off"></i> Preview'}]}),Ext.DomHelper.append(e,{tag:"span",style:"clear: both"})},registerAce:function(){this.editor=ace.edit(Ext.DomQuery.selectNode("div#content-md")),this.editor.setOptions({maxLines:1/0,minLines:25,showPrintMargin:!1}),this.editor.renderer.setShowGutter(!1),this.editor.getSession().setValue(this.textarea.getValue()),this.editor.getSession().setMode("ace/mode/markdown"),this.editor.setTheme("ace/theme/monokai")},languageOverrides:{js:"javascript",html:"xml"},registerMarked:function(){var e=this,t=new marked.Renderer;t.code=function(e,t,i){if(this.options.highlight){var o=this.options.highlight(e,t);null!=o&&o!==e&&(i=!0,e=o)}return t?'<pre><code class="hljs '+this.options.langPrefix+escape(t,!0)+'">'+(i?e:escape(e,!0))+"\n</code></pre>\n":"<pre><code>"+(i?e:escape(e,!0))+"\n</code></pre>"},marked.setOptions({highlight:function(t,i){return e.languageOverrides[i]&&(i=e.languageOverrides[i]),-1!=hljs.listLanguages().indexOf(i)?hljs.highlight(i,t).value:t},renderer:t})},render:function(){var e=this;this.textarea=Ext.get("ta"),this.buildUI(),this.registerAce(),this.registerMarked();var t=Ext.get("preview-button"),i=Ext.get("preview-md"),o=Ext.get("content-md"),s=MODx.load({xtype:"modx-treedrop",target:o,targetEl:o,onInsert:function(e){return this.insert(e),this.focus(),!0}.bind(this.editor),iframe:!0});this.textarea.on("destroy",function(){s.destroy()}),t.addListener("click",function(){i.isVisible()?(i.setDisplayed("none"),o.setDisplayed("block"),t.child("i").removeClass("icon-toggle-on"),t.child("i").addClass("icon-toggle-off")):(i.setDisplayed("block"),o.setDisplayed("none"),t.child("i").removeClass("icon-toggle-off"),t.child("i").addClass("icon-toggle-on"))}),i.update(marked(this.editor.getValue())),this.editor.getSession().on("change",function(){i.update(marked(e.editor.getValue()))})}}),MarkdownEditor=new MarkdownEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLGdCQUFBLFNBQUEsR0FDQSxFQUFBLE1BQ0EsZUFBQSxXQUFBLFlBQUEsS0FBQSxLQUFBLEdBRUEsS0FBQSxTQUFBLEtBQUEsTUFBQSxhQUVBLElBQUEsT0FBQSxlQUFBLElBQUEsV0FDQSxjQUFBLFdBQ0EsZUFBQSxXQUFBLGNBQUEsS0FBQSxNQUVBLElBQUEsUUFBQSxLQUFBLE9BQUEsT0FHQSxRQUFBLFdBQ0EsS0FBQSxTQUFBLGFBQUEsUUFDQSxLQUFBLFNBQUEsU0FBQSxHQUNBLEtBQUEsU0FBQSxVQUFBLEVBRUEsSUFBQSxHQUFBLElBQUEsVUFBQSxhQUFBLEtBQUEsVUFDQSxJQUFBLE1BQ0EsUUFBQSxzQkFHQSxLQUFBLFVBQUEsT0FBQSxHQUNBLElBQUEsTUFDQSxHQUFBLGFBQ0EsUUFBQSxLQUFBLFNBQUEsSUFBQSxZQUdBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsYUFDQSxRQUFBLGtCQUdBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsVUFDQSxLQUNBLElBQUEsT0FDQSxHQUFBLGlCQUNBLEtBQUEsbURBSUEsSUFBQSxVQUFBLE9BQUEsR0FDQSxJQUFBLE9BQ0EsTUFBQSxpQkFJQSxZQUFBLFdBQ0EsS0FBQSxPQUFBLElBQUEsS0FBQSxJQUFBLFNBQUEsV0FBQSxtQkFDQSxLQUFBLE9BQUEsWUFDQSxTQUFBLElBQ0EsU0FBQSxHQUNBLGlCQUFBLElBRUEsS0FBQSxPQUFBLFNBQUEsZUFBQSxHQUNBLEtBQUEsT0FBQSxhQUFBLFNBQUEsS0FBQSxTQUFBLFlBQ0EsS0FBQSxPQUFBLGFBQUEsUUFBQSxxQkFDQSxLQUFBLE9BQUEsU0FBQSxzQkFHQSxtQkFDQSxHQUFBLGFBQ0EsS0FBQSxPQUdBLGVBQUEsV0FDQSxHQUFBLEdBQUEsS0FDQSxFQUFBLEdBQUEsUUFBQSxRQUVBLEdBQUEsS0FBQSxTQUFBLEVBQUEsRUFBQSxHQUNBLEdBQUEsS0FBQSxRQUFBLFVBQUEsQ0FDQSxHQUFBLEdBQUEsS0FBQSxRQUFBLFVBQUEsRUFBQSxFQUNBLE9BQUEsR0FBQSxJQUFBLElBQ0EsR0FBQSxFQUNBLEVBQUEsR0FJQSxNQUFBLEdBTUEsMEJBQ0EsS0FBQSxRQUFBLFdBQ0EsT0FBQSxHQUFBLEdBQ0EsTUFDQSxFQUFBLEVBQUEsT0FBQSxHQUFBLElBQ0Esb0JBVkEsZUFDQSxFQUFBLEVBQUEsT0FBQSxHQUFBLElBQ0EsbUJBV0EsT0FBQSxZQUNBLFVBQUEsU0FBQSxFQUFBLEdBRUEsTUFEQSxHQUFBLGtCQUFBLEtBQUEsRUFBQSxFQUFBLGtCQUFBLElBQ0EsSUFBQSxLQUFBLGdCQUFBLFFBQUEsR0FBQSxLQUFBLFVBQUEsRUFBQSxHQUFBLE1BQUEsR0FFQSxTQUFBLEtBSUEsT0FBQSxXQUNBLEdBQUEsR0FBQSxJQUNBLE1BQUEsU0FBQSxJQUFBLElBQUEsTUFFQSxLQUFBLFVBQ0EsS0FBQSxjQUNBLEtBQUEsZ0JBVUEsSUFBQSxHQUFBLElBQUEsSUFBQSxrQkFDQSxFQUFBLElBQUEsSUFBQSxjQUNBLEVBQUEsSUFBQSxJQUFBLGNBRUEsRUFBQSxLQUFBLE1BQ0EsTUFBQSxnQkFDQSxPQUFBLEVBQ0EsU0FBQSxFQUNBLFNBQUEsU0FBQSxHQUdBLE1BRkEsTUFBQSxPQUFBLEdBQ0EsS0FBQSxTQUNBLEdBQ0EsS0FBQSxLQUFBLFFBQ0EsUUFBQSxHQUVBLE1BQUEsU0FBQSxHQUFBLFVBQUEsV0FBQSxFQUFBLFlBRUEsRUFBQSxZQUFBLFFBQUEsV0FDQSxFQUFBLGFBQ0EsRUFBQSxhQUFBLFFBQ0EsRUFBQSxhQUFBLFNBRUEsRUFBQSxNQUFBLEtBQUEsWUFBQSxrQkFDQSxFQUFBLE1BQUEsS0FBQSxTQUFBLHFCQUVBLEVBQUEsYUFBQSxTQUNBLEVBQUEsYUFBQSxRQUVBLEVBQUEsTUFBQSxLQUFBLFlBQUEsbUJBQ0EsRUFBQSxNQUFBLEtBQUEsU0FBQSxxQkFJQSxFQUFBLE9BQUEsT0FBQSxLQUFBLE9BQUEsYUFDQSxLQUFBLE9BQUEsYUFBQSxHQUFBLFNBQUEsV0FDQSxFQUFBLE9BQUEsT0FBQSxFQUFBLE9BQUEsa0JBSUEsZUFBQSxHQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNYXJrZG93bkVkaXRvciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBNYXJrZG93bkVkaXRvci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxjb25maWcpO1xufTtcbkV4dC5vdmVycmlkZShNT0R4LnBhbmVsLlJlc291cmNlLCB7fSk7XG5cbkV4dC5leHRlbmQoTWFya2Rvd25FZGl0b3IsRXh0LkNvbXBvbmVudCx7XG4gICAgaW5pdENvbXBvbmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIE1hcmtkb3duRWRpdG9yLnN1cGVyY2xhc3MuaW5pdENvbXBvbmVudC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIEV4dC5vblJlYWR5KHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICAsYnVpbGRVSTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0RGlzcGxheWVkKCdub25lJyk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0V2lkdGgoMCk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0SGVpZ2h0KDApO1xuXG4gICAgICAgIHZhciB3cmFwcGVyID0gRXh0LkRvbUhlbHBlci5pbnNlcnRCZWZvcmUodGhpcy50ZXh0YXJlYSwge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzOiAnbWFya2Rvd24tY29udGFpbmVyJ1xuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ2NvbnRlbnQtbWQnLFxuICAgICAgICAgICAgY2xhc3M6IHRoaXMudGV4dGFyZWEuZG9tLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3ByZXZpZXctbWQnLFxuICAgICAgICAgICAgY2xhc3M6ICdtYXJrZG93bi1ib2R5J1xuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3Rvb2xib3gnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgaWQ6ICdwcmV2aWV3LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgaHRtbDogJzxpIGNsYXNzPVwiaWNvbiBpY29uLXRvZ2dsZS1vZmZcIj48L2k+IFByZXZpZXcnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgc3R5bGU6ICdjbGVhcjogYm90aCcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICxyZWdpc3RlckFjZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoRXh0LkRvbVF1ZXJ5LnNlbGVjdE5vZGUoJ2RpdiNjb250ZW50LW1kJykpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIG1heExpbmVzOiBJbmZpbml0eSxcbiAgICAgICAgICAgIG1pbkxpbmVzOiAyNSxcbiAgICAgICAgICAgIHNob3dQcmludE1hcmdpbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLnJlbmRlcmVyLnNldFNob3dHdXR0ZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VmFsdWUodGhpcy50ZXh0YXJlYS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoXCJhY2UvbW9kZS9tYXJrZG93blwiKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcbiAgICB9XG5cbiAgICAsbGFuZ3VhZ2VPdmVycmlkZXM6IHtcbiAgICAgICAganM6ICdqYXZhc2NyaXB0J1xuICAgICAgICAsaHRtbDogJ3htbCdcbiAgICB9XG5cbiAgICAscmVnaXN0ZXJNYXJrZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWRlID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuXG4gICAgICAgIHJlbmRlcmVyLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBsYW5nLCBlc2NhcGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciBvdXQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KGNvZGUsIGxhbmcpO1xuICAgICAgICAgICAgICAgIGlmIChvdXQgIT0gbnVsbCAmJiBvdXQgIT09IGNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPSBvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWxhbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxwcmU+PGNvZGU+J1xuICAgICAgICAgICAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgICAgICAgICAgICsgJ1xcbjwvY29kZT48L3ByZT4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJzxwcmU+PGNvZGUgY2xhc3M9XCJobGpzICdcbiAgICAgICAgICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICAgICAgICAgICsgZXNjYXBlKGxhbmcsIHRydWUpXG4gICAgICAgICAgICArICdcIj4nXG4gICAgICAgICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICAgICAgICsgJ1xcbjwvY29kZT48L3ByZT5cXG4nO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1hcmtlZC5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oY29kZSwgbGFuZyl7XG4gICAgICAgICAgICAgICAgaWYobWRlLmxhbmd1YWdlT3ZlcnJpZGVzW2xhbmddKSBsYW5nID0gbWRlLmxhbmd1YWdlT3ZlcnJpZGVzW2xhbmddO1xuICAgICAgICAgICAgICAgIHJldHVybiAoaGxqcy5saXN0TGFuZ3VhZ2VzKCkuaW5kZXhPZihsYW5nKSAhPSAtMSkgPyBobGpzLmhpZ2hsaWdodChsYW5nLCBjb2RlKS52YWx1ZSA6IGNvZGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICxyZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWRlID0gdGhpcztcbiAgICAgICAgdGhpcy50ZXh0YXJlYSA9IEV4dC5nZXQoJ3RhJyk7XG5cbiAgICAgICAgdGhpcy5idWlsZFVJKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY2UoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1hcmtlZCgpO1xuXG5cbiAgICAgICAgLy8gY29weSBiYWNrIHRvIHRleHRhcmVhIG9uIGZvcm0gc3VibWl0Li4uXG4gICAgICAgIC8vdGV4dGFyZWEuY2xvc2VzdCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgIHRleHRhcmVhLnZhbChlZGl0b3IuZ2V0U2Vzc2lvbigpLmdldFZhbHVlKCkpO1xuICAgICAgICAvL30pO1xuXG5cblxuICAgICAgICB2YXIgcHJldmlld0J1dHRvbiA9IEV4dC5nZXQoJ3ByZXZpZXctYnV0dG9uJyk7XG4gICAgICAgIHZhciBwcmV2aWV3ID0gRXh0LmdldCgncHJldmlldy1tZCcpO1xuICAgICAgICB2YXIgY29udGVudCA9IEV4dC5nZXQoJ2NvbnRlbnQtbWQnKTtcblxuICAgICAgICB2YXIgZHJvcFRhcmdldCA9IE1PRHgubG9hZCh7XG4gICAgICAgICAgICB4dHlwZTogJ21vZHgtdHJlZWRyb3AnLFxuICAgICAgICAgICAgdGFyZ2V0OiBjb250ZW50LFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGNvbnRlbnQsXG4gICAgICAgICAgICBvbkluc2VydDogKGZ1bmN0aW9uKHMpe1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcy5lZGl0b3IpLFxuICAgICAgICAgICAgaWZyYW1lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRleHRhcmVhLm9uKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7ZHJvcFRhcmdldC5kZXN0cm95KCk7fSk7XG5cbiAgICAgICAgcHJldmlld0J1dHRvbi5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoYSxiLGMsZCkge1xuICAgICAgICAgICAgaWYgKHByZXZpZXcuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LnNldERpc3BsYXllZCgnbm9uZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5jaGlsZCgnaScpLnJlbW92ZUNsYXNzKCdpY29uLXRvZ2dsZS1vbicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb2ZmJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpZXcuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdub25lJyk7XG5cbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uLmNoaWxkKCdpJykucmVtb3ZlQ2xhc3MoJ2ljb24tdG9nZ2xlLW9mZicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJldmlldy51cGRhdGUobWFya2VkKHRoaXMuZWRpdG9yLmdldFZhbHVlKCkpKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJldmlldy51cGRhdGUobWFya2VkKG1kZS5lZGl0b3IuZ2V0VmFsdWUoKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbk1hcmtkb3duRWRpdG9yID0gbmV3IE1hcmtkb3duRWRpdG9yKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9